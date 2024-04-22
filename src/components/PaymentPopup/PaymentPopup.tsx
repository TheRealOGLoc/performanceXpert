import React from "react"
import CartPagePersonalInfo from "../CartPagePersonalInfo/CartPagePersonalInfo.tsx"
import PaymentComponent from "../PaymentComponent/PaymentComponent.jsx"
import "./PaymentPopup.css"

export default function PaymentPopup({ localCart, totalPrice, userInfo, addressInfo, promotion, setUserInfo, setAddressInfo, proceedToInfo, setProceedToInfo }) {
    const handleClick = () => {
        setProceedToInfo(!proceedToInfo)
    }

    return (
        <div className="ppu-container" >
            <div className="ppu-wrapper" >
                <button onClick={handleClick} className="ppu-close" >X</button>
                <div className="ppu-infos" >
                    <CartPagePersonalInfo setUserInfo={setUserInfo} setAddressInfo={setAddressInfo} />
                    <PaymentComponent localCart={localCart} totalPrice={totalPrice} userInfo={userInfo} addressInfo={addressInfo} promotion={promotion} />
                </div>
            </div>
        </div>
    )
}