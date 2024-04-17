import React from "react"
import UploadLocation from "../../components/UploadLocation/UploadLocation.tsx";
import UploadBrand from "../../components/UploadBrand/UploadBrand.tsx";
import UploadPart from "../../components/UploadPart/UploadPart.tsx"
import UploadCommodity from "../../components/UploadCommodity/UploadCommodity.tsx"

export default function ProfilePage() {
    return (
        <div>
            <UploadLocation/>
            <hr />
            <UploadBrand/>
            <hr />
            <UploadPart/>
            <hr />
            <UploadCommodity/>
        </div>
    )
   
}