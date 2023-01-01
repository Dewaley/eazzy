import PaymentServices from "../../services/PaymentServices";
import { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    PaymentServices.fetchOrders(1)
      .then((res) => {
        const data = res?.data?.orders?.data?.map(async(item) => {
          console.log(JSON.parse(item.order_details));
          return PaymentServices.fetchSingleOrder(
            item?.order_transaction_id
          )
        });
          console.log(data)
        setOrders(data)
      })
  }, []);

  return <div>Orders</div>;
};

export default Orders;
