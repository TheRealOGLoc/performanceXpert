import React from "react"
import { useState, useEffect } from "react";
import AWS from "aws-sdk";
import { getBrands, getParts, createCommodity } from "../../utilities/data-service"

export default function UploadLocation() {

    const [file, setFile] = useState(null);

    const [data, setData] = useState({
        name: "",
        description: "",
        url: "",
        price: 0,
        SKU: "",
        stock: 0,
        part: "",
        brand: "",
    })

    const [brands, setBrands] = useState([])
    const [parts, setParts] = useState([])
    const [theUrl, setTheUrl] = useState(null)

    useEffect(() => {
        async function getBrandsAndParts() {
            const allParts = await getParts()
            const allBrands = await getBrands()
            setParts(allParts)
            setBrands(allBrands)
        }
        getBrandsAndParts()
    }, [])

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
            setTheUrl(url)
            setData((previousState) => {
                const newData = {...previousState, url: theUrl}
                return newData
            })
            
            const result = await createCommodity(data)
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

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <div className="App">
            <div>
                <div style={{fontWeight: "bold", fontSize: "30px"}}>Location Upload</div>
                <form method="POST" onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", maxWidth: "500px", margin: "0 auto"}} >
                    <label>File</label>
                    <input type="file" name="file" onChange={handleFileChange} required />
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleInputChange} required />
                    <label>Description</label>
                    <input type="text" name="description" onChange={handleInputChange} required />
                    <label>Price</label>
                    <input type="text" name="price" onChange={handleInputChange} required />
                    <label>SKU</label>
                    <input type="text" name="SKU" onChange={handleInputChange} required />
                    <label>Stock</label>
                    <input type="text" name="stock" onChange={handleInputChange} required />
                    <select name="brand" onChange={handleInputChange} >
                        {brands.map((brand, index) => <option key={index} value={brand.name} >{brand.name}</option>)}
                    </select>
                    <select name="part" onChange={handleInputChange} >
                        {parts.map((part, index) => <option key={index} value={part.name} >{part.name}</option>)}
                    </select>
                    <input onClick={uploadFile} type="submit" value={"Upload Commodity"}></input>
                </form>
            </div>
        </div>
    );
}