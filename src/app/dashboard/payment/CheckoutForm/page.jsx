// "use client";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import React, { useState } from "react";

// const page = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [cardError, setCardError] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (card === null) {
//       return;
//     }
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });
//     if (error) {
//       console.log(error);
//       setCardError(error.message);
//     } else {
//       console.log(paymentMethod);
//       setCardError("");
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <button
//           className="btn btn-outline btn-primary w-96 my-6 font-bold"
//           type="submit"
//           disabled={!stripe}
//         >
//           Pay
//         </button>
//       </form>
//       {cardError && (
//         <p className="text-red-700 font-bold text-center text-2xl">
//           {cardError}
//         </p>
//       )}
//     </div>
//   );
// };

// export default page;
