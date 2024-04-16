// import React from "react";
// import { useState } from "react";
// import axios from "axios";

// export default function Upload() {
//     const [file, setFile] = useState(null)

//     function onSelectFile (e) {
//         setFile(e.target.files[0])
//     }

//     async function handleSubmit (e) {
//         e.preventDefault()

//         if (file === null) {
//             return
//         }

//         const formData = new FormData()
//         formData.append('image', file);

//         const result = await axios.post("/image-upload", formData)
//         const data = await result.data
//         console.log(data)
//     }


//     return (
//         <div>
//             <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data" >
//                 <input type="file" name="file" onChange={onSelectFile} />
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }

//-----------------------------------------------------------------------------

// import React , {useState} from 'react';
// import S3 from 'react-aws-s3';

// // installed using npm install buffer --save
// window.Buffer = window.Buffer || require("buffer").Buffer;

// // a React functional component, used to create a simple upload input and button

// const Upload = () => {

//     const [selectedFile, setSelectedFile] = useState(null);

//     // the configuration information is fetched from the .env file
//     const config = {
//         bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
//         region: process.env.REACT_APP_REGION,
//         accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
//         secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
//     }

//     const handleFileInput = (e) => {
//         setSelectedFile(e.target.files[0]);
//     }

//     const uploadFile = async (file) => {
//         const ReactS3Client = new S3({
//             ...config,
//             // Add CORS headers
//             headers: { 'Access-Control-Allow-Origin': '*' }
//         });
//         // the name of the file uploaded is used to upload it to S3
//         ReactS3Client
//             .uploadFile(file, file.name)
//             .then(data => console.log(data.location))
//             .catch(err => console.error(err))
//     }
//     return <div>
//         <div>React S3 File Upload</div>
//         <input type="file" onChange={handleFileInput}/>
//         <br></br>
//         <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
//     </div>
// }

// export default Upload;

import AWS from "aws-sdk";
import { useState } from "react";

function Upload() {
  // Create state to store file
  const [file, setFile] = useState(null);

  // Function to upload file to s3
  const uploadFile = async () => {
    // S3 Bucket Name
    const S3_BUCKET = process.env.REACT_APP_AWS_BUCKET_NAME;

    // S3 Region
    const REGION = process.env.REACT_APP_REGION;

    // S3 Credentials
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters
    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    try {
      // Uploading file to s3
      const uploadResult = await s3.putObject(params).promise();
      
      console.log(uploadResult);

    } catch (error) {
      // Handle error
      console.error("Error uploading file:", error);
    }
  };

  // Function to handle file and store it to file state
  const handleFileChange = (e) => {
    // Uploaded file
    const file = e.target.files[0];
    // Changing file state
    setFile(file);
  };

  return (
    <div className="App">
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={uploadFile}>Upload</button>
      </div>
    </div>
  );
}

export default Upload;
