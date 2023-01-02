import PaymentServices from "../../services/PaymentServices";
import { useState, useEffect } from "react";
import AuthServices from "../../services/AuthServices";
import PlaceholderLoading from "react-placeholder-loading";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({});
  const [status, setStatus] = useState("All");
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
            const isoDate = order.updated_at
            const date = new Date(isoDate);
            const options = { month: "short", day: "2-digit", year: "numeric" };
            const formattedDate = date.toLocaleDateString("en-US", options);
            return (
              <div className='border-2 rounded-md p-2 flex flex-col'>
                <div className='flex justify-between'>
                  <span>Processing</span>
                  <div className='flex flex-col gap-2'>
                    <span>Order-Date: {formattedDate}</span>
                    <span className="flex gap-3">
                    <span>Order-ID: {order.order_treansaction_id}</span><span>Copy</span></span>
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
