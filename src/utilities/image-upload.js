const S3 = require('react-aws-s3');

const config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAMEAWS_BUCKET_NAME,
    region: process.env.REACT_APP_AWS_BUCKET_NAMEREGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
}

const ReactS3Client = new S3(config);

async function uploadImage(file, fileName) {
    const result = await ReactS3Client.uploadFile(file, fileName)
    return result
}

module.exports = uploadImage