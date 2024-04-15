// const multer = require('multer');
// const multerS3 = require('multer-s3');
// const aws = require('aws-sdk');
// const path = require('path');

// const extType = ['.jpg', '.PNG', '.png', '.jpeg'];

// // 配置 AWS S3
// const s3 = new aws.S3({
//     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
//     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
//     region: process.env.REACT_APP_REGION
// });

// // 配置 Multer-S3
// module.exports = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
//         acl: 'public-read', // 文件权限设置为公开读取
//         metadata: function (req, file, cb) {
//             cb(null, { fieldName: file.fieldname });
//         },
//         key: function (req, file, cb) {
//             try {
//                 let ext = path.extname(file.originalname).toLowerCase();
//                 if (!extType.includes(ext)) {
//                     throw new Error('File type is not supported');
//                 }
//                 const fileName = Date.now().toString() + '-' + file.originalname;
//                 cb(null, fileName); // 设置文件名为时间戳 + 原始文件名
//             } catch (err) {
//                 cb(err);
//             }
//         }
//     }),
//     fileFilter: (req, file, cb) => {
//         try {
//             let ext = path.extname(file.originalname);
//             if (!extType.includes(ext)) {
//                 throw new Error('File type is not supported');
//             }
//             cb(null, true);
//         } catch (err) {
//             cb(err);
//         }
//     }
// });

const multer = require('multer');
const path = require('path');

const extType = ['.jpg', '.PNG', '.png', '.jpeg'];

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (!extType.includes(ext)) {
            cb(new Error('File type is not supported'));
            return;
        }
        cb(null, true);
    }
})
