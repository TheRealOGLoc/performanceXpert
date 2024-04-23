import React from "react"
import { useState } from "react";
import AWS from "aws-sdk";
import { createBrand } from "../../utilities/data-service"

export default function UploadBrand() {
    // Create state to store file
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null);


    // Function to upload file to s3
    const uploadFile = async () => {
        if (file === null) {
            return
        }

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
            const url = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${file.name}`;
            const result = await createBrand({
                "name": name,
                "description": description,
                "url": url,
            })
            console.log(result)


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

    const handleNameInput = (e) => {
        setName(e.target.value)
    }

    const handleDescriptionInput = (e) => {
        setDescription(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="App">
            <div>
                <div  style={{fontWeight: "bold", fontSize: "30px"}}  >Brand Upload</div>
                <form method="POST" onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", maxWidth: "500px", margin: "0 auto"}}  >
                    <label>File</label>
                    <input type="file" onChange={handleFileChange} required />
                    <label>Name</label>
                    <input type="text" name="Name" onChange={handleNameInput} required />
                    <label>Description</label>
                    <input type="text" name="description" onChange={handleDescriptionInput} required />
                    <input onClick={uploadFile} type="submit" value={"Brand Upload"}></input>
                </form>
            </div>
        </div>
    );
}