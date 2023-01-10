import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PaymentServices from "../../services/PaymentServices";
import { useNavigate } from "react-router-dom";
import { UseShoppingCartData } from "../../context/CartContext";
import ProductServices from "../../services/ProductServices";

const OrderConfirmation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [phase, setPhase] = useState("Processing");
  const navigate = useNavigate();

  useEffect(() => {
    setPhase("Processing");
    console.log(searchParams.get("paymentReference"));
    PaymentServices.confirmPayment(searchParams.get("paymentReference")).then(
      (res) => {
        res?.data.message === "Order Confirmed Successfully" ||
        res?.data.status === "Payment Successful"
          ? setPhase("Success")
          : setPhase("Fail");
      }
    );
  }, [searchParams]);

  useEffect(() => {
    if (phase === "Success") {
      ProductServices.emptyCart().then((res) => {
        console.log(res);
      });
      setTimeout(() => {
        navigate("/orders");
      }, 3000);
    } else if (phase === "Fail") {
      setTimeout(() => {
        navigate("/checkout");
      }, 3000);
    }
  }, [phase]);

  const Processing = () => {
    return (
      <div>
        <p>Please wait while we verify your payment...</p>
      </div>
    );
  };

  const Successful = () => {
    return (
      <div>
        <p>Your payment was successful!</p>
      </div>
    );
  };

  const Failure = () => {
    return (
      <div>
        <p>Oops... Your payment failed!</p>
      </div>
    );
  };

  return (
    <div className='relative min-h-screen flex justify-center items-center py-8'>
      {phase === "Processing" && <Processing />}
      {phase === "Success" && <Successful />}
      {phase === "Fail" && <Failure />}
    </div>
  );
};

export default OrderConfirmation;
