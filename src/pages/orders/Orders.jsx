import PaymentServices from "../../services/PaymentServices";
import { useState, useEffect } from "react";
import AuthServices from "../../services/AuthServices";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Order from "../../components/Order/Order";
import SearchLayout from "../../layout/searchLayout";

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
    <div className='bg-[#EBF2EB] flex justify-center items-center py-2 md:p-8'>
      <div className='bg-white p-3 md:p-6 flex flex-col gap-6 w-[100%] md:w-[75%]'>
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
        <div id="style-1" className='flex flex-col gap-2 md:h-[50vh] overflow-y-scroll order-sect'>
          {orders.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchLayout(Orders);
