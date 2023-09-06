"use client";

import { Elements } from "@stripe/react-stripe-js";
import { Elements } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm/page";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_Stripe_PK);
const Payment = () => {
  return (
    <div>
      <h2 className="text-blue-600 text-center font-bold text-3xl my-12">
        Payment
      </h2>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
