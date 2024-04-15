import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import S3 from 'react-aws-s3';
import getConfig from "../../utilities/AWS-config"

export default function Upload() {
    const [file, setFile] = useState(null)

    function onSelectFile (e) {
        setFile(e.target.files[0])
    }

    async function handleSubmit (e) {
        e.preventDefault()
        if (file === null) {
            return
        }
        const ReactS3Client = new S3(getConfig);
        const result = await ReactS3Client.uploadFile(file, file.name)
        console.log(result)
    }

    return (
        <div>
            <form method="POST" onSubmit={handleSubmit} >
                <input type="file" name="file" onChange={onSelectFile} />
                <input type="submit" />
            </form>
        </div>
    )
}
