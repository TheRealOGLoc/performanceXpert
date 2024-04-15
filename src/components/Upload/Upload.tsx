import React from "react";
import { useState } from "react";
import axios from "axios";

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

        const formData = new FormData()
        formData.append('image', file);

        const result = await axios.post("/image-upload", formData)
        const data = await result.data
        console.log(data)
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