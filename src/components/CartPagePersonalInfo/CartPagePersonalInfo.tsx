import React from "react"

export default function CartPagePersonalInfo({ setUserInfo, setAddressInfo }) {

    const handleInfoChange = (e) => {
        setUserInfo((previousState) => {
            const name = e.target.name
            const value = e.target.value
            const newInfo = {...previousState, [name]: value}
            return newInfo
        })
    }

    const handleAddressChange = (e) => {
        setAddressInfo((previousState) => {
            const name = e.target.name
            const value = e.target.value
            const newInfo = {...previousState, [name]: value}
            return newInfo
        })
    }

    return (
        <div>
            <div>
                <div>Receiver Infomation</div>
                <div>
                    <div>Name</div>
                    <input type="text" name="name" onChange={handleInfoChange} />
                    <div>Email</div>
                    <input type="email" name="email" onChange={handleInfoChange} />
                    <div>Mobile</div>
                    <input type="text" name="mobile" onChange={handleInfoChange} />
                </div>
            </div>
            <div>
                <div>Address</div>
                <div>
                    <div>Address Line 1</div>
                    <input type="text" name="addressLine1" onChange={handleAddressChange} />
                    <div>Address Line 2</div>
                    <input type="text" name="addressLine2" onChange={handleAddressChange} />
                    <div>Suburb</div>
                    <input type="text" name="suburb" onChange={handleAddressChange} />
                    <div>State</div>
                    <input type="text" name="state" onChange={handleAddressChange} />
                    <div>Postcode</div>
                    <input type="text" name="postCode" onChange={handleAddressChange} />
                </div>
            </div>
        </div>
    )

}