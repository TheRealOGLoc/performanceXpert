// PaymentComponent.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

//Create a Stripe promise (stripePromise) using the loadStripe function. This promise is used to load the Stripe.js script asynchronously.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);
const PaymentComponent = ({localCart, totalPrice, userInfo, addressInfo, promotion}) => {
  return (
    <div>
      <h1>Stripe Payment Example</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm localCart={localCart} totalPrice={totalPrice} userInfo={userInfo} addressInfo={addressInfo} promotion={promotion} />
      </Elements>
    </div>
  );

};
export default PaymentComponent;