import React from "react"
import { useState } from "react"
import { findPromotion } from "../../utilities/data-service"

export default function CartPageTotalPrice({totalPrice, setPromotion}) {

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
        <div>
            <div>
                <div>Promotion Code: </div>
                <input type="text" onChange={handleChange} />
                <button onClick={handleApplyPromotion} >Apply</button>
            </div>
            <div>
                {codeFound === "Code Found" ? <div><div>Promotion:{codeName} Applyed</div><button onClick={handleClearPromotion} >Clear Promotion</button></div> : <div></div> }
                {codeFound === "Code Not Found" ? <div>Promotion Code Not Found</div>: <div></div> }
            </div>
            <div>Tax (include): ${totalPrice * (1 - discount) * 0.1} </div>
            <div>Total Price: ${totalPrice * (1 - discount) }</div>
        </div>
    )
}