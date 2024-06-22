import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CampaignCardDetails/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PK);


const PaymentPage = () => { 
 
     const data =    JSON.parse(localStorage.getItem("donationDetails"))
   
    
    return (
        <div className="max-w-3xl mx-auto h-[50vh]">
              {/* payment elements */}
              <div className=" mt-6">
                <h1>Your selected amount : ${data.newAmount}</h1>
              <Elements
                stripe={stripePromise}
                // options={options}
              >
                <CheckoutForm   />
              </Elements>
            </div>
            {/* payment elements */}
        </div>
    );
};

export default PaymentPage;


 