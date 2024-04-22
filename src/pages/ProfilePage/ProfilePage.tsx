import React from "react"
import UploadLocation from "../../components/UploadLocation/UploadLocation.tsx";
import UploadBrand from "../../components/UploadBrand/UploadBrand.tsx";
import UploadPart from "../../components/UploadPart/UploadPart.tsx"
import UploadCommodity from "../../components/UploadCommodity/UploadCommodity.tsx"
import {logOut} from "../../utilities/users-service.js";
import { Link } from "react-router-dom";
export default function ProfilePage({user, setUser}) {

    const handleLogout = () => {
        logOut()
        setUser(null)
    }

    return (
        <div>
            {user.admin ?
                <div>
                    <UploadLocation />
                    <hr />
                    <UploadBrand />
                    <hr />
                    <UploadPart />
                    <hr />
                    <UploadCommodity />
                </div> : <div></div>
            }
            <div>
                <Link to={'/'} onClick={handleLogout} >Log Out</Link>
            </div>
        </div>
    )

}