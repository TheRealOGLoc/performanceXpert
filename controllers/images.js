const imageUpload = require( "../src/utilities/image-upload")
const fs = require('fs');

async function upload(req, res) {
    // try {
    //     const file = req.file
    //     const fileName = req.file.filename
    //     const fileContent = fs.readFileSync(file.path)

    //     const result = await imageUpload(file, fileName)
    // } catch (err) {
    //     console.log(err)
    // }
    res.status(200).json({msg: "ok", file: req.file})
}

module.exports = {
    upload: upload,
}