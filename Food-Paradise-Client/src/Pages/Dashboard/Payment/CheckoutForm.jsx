import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from 'react';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const [clientSecret, setClientSecret] = useState('');
    const {user} = useAuth();

    const totalPrice = cart.reduce((total, item) => total + item.price , 0)
    
    const [errorMessage, setErrorMessage] = useState('');  //State for handling errors

    // Automatically focus on CardElement when component mounts
    useEffect(() => {
      const cardElement = elements?.getElement(CardElement);
      if (cardElement) {
        // Add a small delay to ensure the element is fully loaded
        setTimeout(() => {
          cardElement.focus();  // Focus on the CardElement
        }, 100);  // 100ms delay to ensure CardElement is ready
      }
    }, [elements]);

    useEffect(()=> {
      axiosSecure.post('/create-payment-intent', {price: totalPrice})
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    },[axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });

        if (error) {
          console.log('payment error', error);
          setErrorMessage(error.message);  // Set error message from Stripe
        } else {
          console.log('payment method', paymentMethod);
          setErrorMessage('');  // Clear any previous errors if payment method is successful
        }

        //confirm payment
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
          payment_method : {
            card : card,
            billing_details : {
              name : user?.displayName || 'anonymous',
              email : user?.email || 'anonymous'
            }
          }
        });

        if(confirmError){
          console.log('Confirm Error');
        }
        else{
          console.log("Payment Intent", paymentIntent);
        }
    };

    return (
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
        {/* Card Element Container */}
        <div className="mb-4">
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Display Error Message */}
        {errorMessage && (
          <div className="mb-4 text-red-600 font-semibold">
            {errorMessage}
          </div>
        )}

        {/* Pay Button */}
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Pay Now
        </button>
      </form>
    );
};

export default CheckoutForm;
