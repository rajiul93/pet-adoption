import useAuth from "@/Provider/useAuth";
import useAxiosSecure from "@/Utils/Hook/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [error, setError] = useState("");

  const data = JSON.parse(localStorage.getItem("donationDetails"));
 
  const money = data.newAmount;

  useEffect(() => {
    const paymentIntent = async () => {
      if (money) {
        const res = await axiosSecure.post(`/create-payment-intent`, {
          price: money,
        });
        setClientSecret(res.data.clientSecret);
      }
    };
    paymentIntent();
  }, [money, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null){ 
    console.log(card)

        return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
    //   console.log("[error]", error);
      setError(error.message);
    } else {
      setError("");
        // console.log("[PaymentMethod]", paymentMethod);
    }
    // const donarName = user?.displayName;
    // const email = user?.email;
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
            card:card,
            billing_details:{
                email:user?.email || "anonymous name",
                name :user?.displayName || "anonymous name"

            }
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      const transactionId = paymentIntent.id;
      const campaignId= id;
      
      if (paymentIntent.status === "succeeded") {
        const newData = {
          ...data,
          transactionId,
          campaignId
        };
        console.log("payment Intent", paymentIntent);
        // try {
          const res = await axiosSecure.patch(`/donation-money/${id}`, newData);
          const resdonate = await axiosSecure.post(`/my-donation`, newData);
        //   console.log("new collection data",resdonate.data)
        //   if (resdonate.acknowledged) {
            
            toast.success("Successfully Donate Done");
    setLoading(false);
            
        //   }
        //   if (res.data.acknowledged && res.data.modifiedCount > 0) {
        //     toast.success("Successfully Donate Done");
        //   }

        //   console.log(res.data);
        // } catch (error) {
        //   console.log(error);
        // }
      }
    }
  };

  return (
    <div>
        <Toaster />
        <h1>
        4242 4242 4242 4242
        </h1>
      <form className="border p-2 flex flex-col" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
     {!stripe || !clientSecret ? <button disabled className="border py-1 px-4 rounded-lg mt-2 bg-green-500">Pay</button>  : <button
          className="border py-1 px-4 rounded-lg mt-2 bg-green-500"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay {loading && "...."}
        </button>}
      </form>
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export default CheckoutForm;

// try {
//   const res = await axiosSecure.patch(`/donation-money/${id}`,donarDetails);
//   if(res.data.acknowledged && res.data.modifiedCount>0 ) {
//     toast.success("Successfully Donate Done")
//     refetch()
//   }

//   console.log(res.data)
// } catch (error) {
//   console.log(error);
// }
// add stripe
