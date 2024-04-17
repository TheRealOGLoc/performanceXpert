import React from "react"
import { useState } from "react";
import UploadLocation from "../../components/UploadLocation/UploadLocation.tsx";
import UploadBrand from "../../components/UploadBrand/UploadBrand.tsx";
import UploadPart from "../../components/UploadPart/UploadPart.tsx"

export default function ProfilePage() {
    return (
        <div>
            <UploadLocation/>
            <hr />
            <UploadBrand/>
            <hr />
            <UploadPart/>
        </div>
    )
   
}