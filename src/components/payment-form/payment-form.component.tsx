import { useState, FormEvent } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { StripeCardElement } from "@stripe/stripe-js";
import axios from "axios";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartTotal } from "../../store/cart/cart.selector";

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./payment-form.style";

const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/create-payment-intent`,
    
        { amount: amount * 100, currency: "eur"  },
        { headers: { "Content-Type": "application/json" }  }
      );
      const clientSecret = data.paymentIntent.client_secret;
      const cardDetails = elements.getElement(CardElement);
      console.log(data)
      if (!ifValidCardElement(cardDetails)) {
        setIsProcessingPayment(false);
        alert("Invalid card element.");
        return;
      }
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardDetails,
          billing_details: {
            name: currentUser ? currentUser.displayName : "Guest",
          },
        },
      });
      setIsProcessingPayment(false);
      if (paymentResult.error) {
        alert(paymentResult.error.message);
      } else {
        if (
          paymentResult.paymentIntent &&
          paymentResult.paymentIntent.status === "succeeded"
        ) {
          alert("Payment Successful!");
        }
      }
    } catch (error: any) {
      console.error(error);
      setIsProcessingPayment(false);
      alert("There was an error processing your payment. Please try again.");
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton>Pay Now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;
