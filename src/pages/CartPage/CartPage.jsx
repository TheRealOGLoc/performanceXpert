import React, { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../App/CartContext";
import CartPageCommodity from "../../components/CartPageCommodity/CartPageCommodity.tsx";
import { getItemLocalStorage } from "../../utilities/cart-service.js";
import CartPageTotalPrice from "../../components/CartPageTotalPrice/CartPageTotalPrice.tsx";
import CartPagePersonalInfo from "../../components/CartPagePersonalInfo/CartPagePersonalInfo.tsx";
import { getUser } from "../../utilities/users-service.js";
import PaymentComponent from "../../components/PaymentComponent/PaymentComponent.jsx";

export default function CartPage() {
    const { cart, setCart } = useContext(CartContext);
    const [localCart, setLocalCart] = useState(getItemLocalStorage());
    const [totalPrice, setTotalPrice] = useState(0)
    const [user, setUser] = useState(getUser())
    const [promotion, setPromotion] = useState(0)
    const myRef = useRef(null)
    const [proceedToInfo, setProceedToInfo] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        mobile: "",

    })
    const [addressInfo, setAddressInfo] = useState({
        addressLine1: "",
        addressLine2: "",
        postCode: 0,
        suburb: "",
        state: "",
    })

    const updatePriceList = (id, quantity) => {
        const updatedPrices = localCart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: quantity };
            }
            return item;
        });
        setLocalCart(updatedPrices);
    };

    const executeScroll = () => myRef.current.scrollIntoView()

    useEffect(() => {
        let total = 0
        localCart.forEach((item) => {
            total += item.price * item.quantity
        })
        setTotalPrice(total)
    }, [localCart])

    const removePriceItem = (id) => {
        const updatedPrices = localCart.filter((item) => item.id !== id);
        setLocalCart(updatedPrices);
    };

    const handleCheckOut = () => {
        if (user) {
            setProceedToInfo(true)
            executeScroll()
        }
        
    }

    return (
        <div>
            <div style={{ marginTop: "200px" }} >
                {localCart.map((item, index) => (
                    <CartPageCommodity
                        id={item.id}
                        quantity={item.quantity}
                        updatePriceList={updatePriceList}
                        removePriceItem={removePriceItem}
                        key={index}
                    />
                ))}
            </div>
            <div>
                <CartPageTotalPrice totalPrice={totalPrice} setPromotion={setPromotion} />
                <button onClick={handleCheckOut} >Proceed to Checkout</button>
            </div>
            {proceedToInfo
                ?
                <div  >
                    <CartPagePersonalInfo setUserInfo={setUserInfo} setAddressInfo={setAddressInfo} />
                    <button>Proceed to Payment</button>
                </div>
                :
                <div></div>}

            <div ref={myRef} >
                <PaymentComponent localCart={localCart} totalPrice={totalPrice} userInfo={userInfo} addressInfo={addressInfo} promotion={promotion} />
            </div>
        </div>
    );
}
