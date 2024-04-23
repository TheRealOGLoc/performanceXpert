import React from "react"
import { useState } from "react"
import { findPromotion } from "../../utilities/data-service"
import "./CartPageTotalPrice.css"

export default function CartPageTotalPrice({ totalPrice, setPromotion }) {

    const [promotionCode, setPromotionCode] = useState("")
    const [codeFound, setCodeFound] = useState("Not searched")
    const [discount, setDiscount] = useState(0)
    const [codeName, setCodeName] = useState("")

    const handleChange = (e) => {
        setPromotionCode(e.target.value)
    }

    const handleApplyPromotion = async () => {
        const result = await findPromotion({ code: promotionCode })
        if (result) {
            setCodeFound("Code Found")
            setCodeName(result.name)
            setDiscount(result.percentage)
            setPromotion(result.percentage)
        } else {
            setCodeFound("Code Not Found")
        }
    }

    const handleClearPromotion = () => {
        setCodeFound("Not serched")
        setDiscount(0)
        setCodeName("")
        setPromotion(0)
    }

    return (
        <div className="cptp-container" >
            <h3>Price</h3>
            <div>Tax (include): ${totalPrice * (1 - discount) * 0.1} </div>
            <div className="cptp-total-price" >Total Price: ${totalPrice * (1 - discount)}</div>
            <div className="cptp-promo" >
                <input type="text" onChange={handleChange} placeholder="Promo Code" />
                <button onClick={handleApplyPromotion} >Apply</button>
            </div>
            <div>
                {codeFound === "Code Found" ? <div><div>Promotion:{codeName} Applyed</div><button onClick={handleClearPromotion} style={{border:"none", backgroundColor:"red", color:"white", fontWeight:"bold"}} >Clear Promotion</button></div> : <div></div>}
                {codeFound === "Code Not Found" ? <div className="cptp-not-found" >Promotion Code Not Found!</div> : <div></div>}
            </div>
        </div>
    )
}