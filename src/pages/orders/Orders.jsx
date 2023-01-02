import PaymentServices from "../../services/PaymentServices";
import { useState, useEffect } from "react";
import AuthServices from "../../services/AuthServices";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({});
  const [status, setStatus] = useState("All");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(2);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    AuthServices.fetchUser().then((res) => {
      console.log(res?.data);
      setUser(res?.data);
    });
    PaymentServices.fetchOrders(1).then(async (res) => {
      console.log(res);
      const data = await res?.data?.orders?.data;
      console.log(data);
      setOrders(data);
      return data;
    });
  }, []);

  // function getColorForStatus(status) {
  //   switch (status) {
  //     case 'processing':
  //       return '#FFA500';  // orange
  //     case 'shipped':
  //       return '#0000FF';  // blue
  //     case 'completed':
  //       return '#00FF00';  // green
  //     default:
  //       return '#000000';  // black
  //   }
  // }

  return (
    <div className='bg-[#EBF2EB] py-2 md:p-8'>
      <div className='bg-white p-3 md:p-6 flex flex-col gap-6'>
        <h1 className='font-semibold text-["rgba(52, 53, 56, 0.52)"]'>
          {user?.first_name + "'s orders"}{" "}
        </h1>
        <div className='flex text-sm justify-between sm:justify-start sm:gap-3'>
          <span
            className={`hover:font-semibold cursor-pointer ${
              status === "All" && "font-semibold"
            }`}
            onClick={() => {
              setStatus("All");
            }}
          >
            All
          </span>
          <span
            className={`hover:font-semibold cursor-pointer ${
              status === "Processing" && "font-semibold"
            }`}
            onClick={() => {
              setStatus("Processing");
            }}
          >
            Processing
          </span>
          <span
            className={`hover:font-semibold cursor-pointer ${
              status === "Shipped" && "font-semibold"
            }`}
            onClick={() => {
              setStatus("Shipped");
            }}
          >
            Shipped
          </span>
          <span
            className={`hover:font-semibold cursor-pointer ${
              status === "Completed" && "font-semibold"
            }`}
            onClick={() => {
              setStatus("Completed");
            }}
          >
            Completed
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          {orders.map((order) => {
            const isoDate = order.updated_at;
            const date = new Date(isoDate);
            const options = { month: "short", day: "2-digit", year: "numeric" };
            const formattedDate = date.toLocaleDateString("en-US", options);
            return (
              <div className='border-2 rounded-md p-2 md:p-4 flex flex-col relative'>
                {showToast && (
                  <div className='toast p-1 text-xs'>
                    Text copied
                  </div>
                )}
                <div className='flex justify-between items-center border-b-2 py-4'>
                  <span className='bg-[#FFA500] p-1 text-white/70 rounded text-xs sm:text-sm mr-1'>
                    Processing
                  </span>
                  <div className='flex flex-col gap-2 text-neutral-300 text-xs sm:text-sm'>
                    <span>Order-Date: {formattedDate}</span>
                    <span className='flex gap-3 items-center'>
                      <span className='block sm:hidden'>
                        Order-ID:{" "}
                        {order.order_transaction_id.substring(0, 5) + "..."}
                      </span>
                      <span className='hidden sm:block'>
                        Order-ID:{" "}
                        {order.order_transaction_id.substring(0, 10) + "..."}
                      </span>
                      <span
                        className='text-greenish text-xs'
                        onClick={handleCopy}
                      >
                        Copy
                      </span>
                    </span>
                  </div>
                </div>
                <div className='flex justify-between items-center py-4 text-xs md:text-sm'>
                  <div className='flex items-center gap-2 mr-4'>
                    <img
                      src={
                        "https://media.tryeazzy.co/" +
                        order.order_details[0].productDetails.product_image
                      }
                      alt=''
                      className='w-[40%] sm:w-[60%]'
                    />
                    <div className='flex flex-col gap-2'>
                      <span>
                        {order.order_details[0].productDetails.product_name}
                      </span>
                      <span>
                        {order.order_details[0].productDetails.product_price *
                          order.order_details[0].quantity}
                      </span>
                      <span>
                        {order.order_details[0].productDetails.product_unit}
                      </span>
                    </div>
                  </div>
                  <div className='w-full max-w-[300px]'>
                    <Button
                      content={"View order"}
                      large
                      onClick={() => {
                        navigate(`/order/${order.order_transaction_id}`);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
