import React from "react"
import { useState } from "react";
import { createPart } from "../../utilities/data-service"

export default function UploadBrand() {
    // Create state to store file
    const [name, setName] = useState("")

    const uploadPart = async () => {
        try {
            const result = await createPart({
                "name": name,
            })
            console.log(result)

        } catch (error) {
            // Handle error
            console.error("Error uploading file:", error);
        }
    };

    const handleNameInput = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="App">
            <div>
                <div>Part Upload</div>
                <form method="POST" onSubmit={handleSubmit} >
                    <label>Name</label>
                    <input type="text" name="Name" onChange={handleNameInput} required />
                    <input onClick={uploadPart} type="submit"></input>
                </form>
            </div>
        </div>
    );
}