// PaymentComponent.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import "./PaymentComponent.css"

//Create a Stripe promise (stripePromise) using the loadStripe function. This promise is used to load the Stripe.js script asynchronously.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);
const PaymentComponent = ({ localCart, totalPrice, userInfo, addressInfo, promotion }) => {
  return (
    <div className='pc-container' >
      <div className='pc-title' >Stripe Payment</div>
      <Elements stripe={stripePromise}>
        <div className='pc-checkform-wrapper' >
          <CheckoutForm localCart={localCart} totalPrice={totalPrice} userInfo={userInfo} addressInfo={addressInfo} promotion={promotion} />
        </div>
      </Elements>
    </div>
  );

};
export default PaymentComponent;