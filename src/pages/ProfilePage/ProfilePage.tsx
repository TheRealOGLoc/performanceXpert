import React from "react"
import { useState } from "react";
import AWS from "aws-sdk";
import axios from "axios";
import { createLocation } from "../../utilities/data-service"

export default function ProfilePage() {
    // Create state to store file
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
    const [address, setAddress] = useState("")
    const [rating, setRating] = useState(0)
    const [file, setFile] = useState(null);

    const clearInputs = () => {
        setTitle("")
        setDescription("")
        setLat("")
        setLng("")
        setFile(null)
    }

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
            const result = await createLocation({
                "title": title,
                "description": description,
                "lat": lat,
                "lng": lng,
                "url": url,
                "address": address,
                "rating": rating
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

    const handleTitleInput = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionInput = (e) => {
        setDescription(e.target.value)
    }

    const handleLatInput = (e) => {
        setLat(e.target.value)
    }

    const handleLngInput = (e) => {
        setLng(e.target.value)
    }

    const handleAddressInput = (e) => {
        setAddress(e.target.value)
    }

    const handleRatingInput = (e) => {
        setRating(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="App">
            <div>
                <form method="POST" onSubmit={handleSubmit} >
                    <label>File</label>
                    <input type="file" onChange={handleFileChange} required />
                    <label>Title</label>
                    <input type="text" name="title" onChange={handleTitleInput} required />
                    <label>Description</label>
                    <input type="text" name="description" onChange={handleDescriptionInput} required />
                    <label>Lat</label>
                    <input type="text" name="lat" onChange={handleLatInput} required />
                    <label>Lng</label>
                    <input type="text" name="lng" onChange={handleLngInput} required />
                    <label>Address</label>
                    <input type="text" name="address" onChange={handleAddressInput} required />
                    <label>Rating</label>
                    <input type="text" name="address" onChange={handleRatingInput} required />
                    <input onClick={uploadFile} type="submit"></input>
                </form>
            </div>
        </div>
    );
}