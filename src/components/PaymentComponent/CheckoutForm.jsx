import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { getUser } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';
import { deleteLocalStorage } from '../../utilities/cart-service';

const CheckoutForm = ({ localCart, totalPrice, userInfo, addressInfo, promotion }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [user, setUser] = useState(getUser())
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [paymentError, setPaymentError] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        try {
            const token = await stripe.createToken(cardElement);
            await handlePayment(token.id);
        } catch (error) {
            console.error(error);
            setPaymentError(error.message || 'An error occurred during payment.');
            setPaymentSuccess(null);
        }
    };

    const handlePayment = async (tokenId) => {
        try {
            setLoading(true)
            const response = await axios.post('/make-payment', {
                user: user,
                cart: localCart,
                price: totalPrice * (1 - promotion),
                userInfo: userInfo,
                addressInfo: addressInfo
            });
            if (response.data.success) {
                setLoading(false)
                setPaymentSuccess('Payment successful!');
                setPaymentError(null);
                deleteLocalStorage()
                navigate('/')
            } else {
                setPaymentError('Payment failed. Please try again.');
                setPaymentSuccess(null);
            }
        } catch (error) {
            console.error(error);
            setPaymentError('An error occurred while processing your payment.');
            setPaymentSuccess(null);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <CardElement options={styles.cardElement} />
            <button
                type="submit"
                style={stripe ? styles.submitButton : { ...styles.submitButton, ...styles.disabledButton }}
                disabled={!stripe}
            >
                Pay
            </button>
            {loading
                ?
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                :
                <div></div>
            }
        </form>
    );
};

const styles = {
    form: {
        width: '400px',
        margin: 'auto',
    },
    cardElement: {
        fontSize: '16px',
        color: '#32325d',
    },
    submitButton: {
        marginTop: '16px',
        padding: '10px 15px',
        backgroundColor: '#5cb85c',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    disabledButton: {
        backgroundColor: '#b3b3b3', 
        cursor: 'not-allowed',
    },
    error: {
        color: 'red',
        marginTop: '8px',
    },
    success: {
        color: 'green',
        marginTop: '8px',
    },
};

export default CheckoutForm;
