const express = require('express')
const router = express.Router();
const multer = require('multer-s3');
const AWS = require('aws-sdk')

const s3 = new AWS.S3({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    region: process.env.REGION
})

const uploadWithMulter = () => {
    storage: multer({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        metadata: function (req, file, cb) {
            cb(null, { fieldname: file.fieldname })
        },
        key: function (req, file, cb) {
            cb(null, file.originalname)
        }
    }).array('s3Images', 2)
}

uploadToAws = (req, res) => {
    console.log(1)
    const upload = uploadWithMulter()

    upload(req, res, err => {
        if (err) {
            console.log(err);
            res.json({ err, msg: "Error occured while uploading" })
            return
        }
        res.json({ msg: "File uploaded successfully", files: req.files })
    })
}

router.post('/upload', uploadToAws)

module.exports = router