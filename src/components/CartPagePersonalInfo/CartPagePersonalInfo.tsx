import React from "react"
import "./CartPagePersonalInfo.css"

export default function CartPagePersonalInfo({ setUserInfo, setAddressInfo }) {

    const handleInfoChange = (e) => {
        setUserInfo((previousState) => {
            const name = e.target.name
            const value = e.target.value
            const newInfo = { ...previousState, [name]: value }
            return newInfo
        })
    }

    const handleAddressChange = (e) => {
        setAddressInfo((previousState) => {
            const name = e.target.name
            const value = e.target.value
            const newInfo = { ...previousState, [name]: value }
            return newInfo
        })
    }

    return (
        <div>
            <div>
                <div className="cppi-title" >Receiver Infomation</div>
                <div>
                    <div className="form-floating mb-3">
                        <input name="name" type="text" onChange={handleInfoChange} className="form-control" id="floatingInput" placeholder="Jack"/>
                            <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input name="email"  type="email" onChange={handleInfoChange} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input name="mobile" type="text" onChange={handleInfoChange} className="form-control" id="floatingInput" placeholder="0421234567"/>
                            <label  htmlFor="floatingInput">Mobile</label>
                    </div>
                </div>
            </div>
            <div>
                <div className="cppi-title" >Address</div>
                <div>
                    <div className="form-floating mb-3">
                        <input name="addressLine1" type="text" onChange={handleAddressChange} className="form-control" id="floatingInput" placeholder="Jack"/>
                            <label htmlFor="floatingInput">Address Line 1</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input name="addressLine2" type="text" onChange={handleAddressChange} className="form-control" id="floatingInput" placeholder="Jack"/>
                            <label htmlFor="floatingInput">Address Line 2</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input name="suburb" type="text" onChange={handleAddressChange} className="form-control" id="floatingInput" placeholder="Jack"/>
                            <label htmlFor="floatingInput">Suburb</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input name="state" type="text" onChange={handleAddressChange} className="form-control" id="floatingInput" placeholder="Jack"/>
                            <label htmlFor="floatingInput">State</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input name="postCode" type="text" onChange={handleAddressChange} className="form-control" id="floatingInput" placeholder="Jack"/>
                            <label htmlFor="floatingInput">Postcode</label>
                    </div>
                </div>
            </div>
        </div>
    )

}