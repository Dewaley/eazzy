import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Button/Button";

const Order = ({ order }) => {
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);
  const isoDate = order?.updated_at;
  const date = new Date(isoDate);
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(order.order_transaction_id);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='border-2 rounded-md p-2 md:p-4 flex flex-col relative'>
      {showToast && <div className='toast p-1 text-xs'>Text copied</div>}
      <div className='flex justify-between items-center border-b-2 py-4'>
        <span className='bg-[#FFA500] p-1 text-white/70 rounded text-xs sm:text-sm mr-1'>
          Processing
        </span>
        <div className='flex flex-col gap-2 text-neutral-400 text-xs sm:text-sm'>
          <span>Order-Date: {formattedDate}</span>
          <span className='flex gap-3 items-center'>
            <span className='block sm:hidden'>
              Order-ID: {order.order_transaction_id.substring(0, 5) + "..."}
            </span>
            <span className='hidden sm:block'>
              Order-ID: {order.order_transaction_id.substring(0, 10) + "..."}
            </span>
            <span
              className='text-greenish text-xs cursor-pointer'
              onClick={handleCopy}
            >
              Copy
            </span>
          </span>
        </div>
      </div>
      <div className='flex justify-between items-center py-4 text-xs md:text-sm'>
        <div className='flex items-center gap-2 mr-4'>
          <Link
            className='w-[40%] sm:w-[60%]'
            to={`/order/${order.order_transaction_id}`}
          >
            <img
              src={
                "https://media.tryeazzy.co/" +
                order.order_details[0].productDetails.product_image
              }
              alt=''
            />
          </Link>
          <div className='flex flex-col gap-2'>
            <Link to={`/order/${order.order_transaction_id}`}>
              {order.order_details[0].productDetails.product_name}
            </Link>
            <span>
              &#x20A6;
              {numberWithCommas(
                order.order_details[0].productDetails.product_price *
                  order.order_details[0].quantity
              )}
            </span>
            <span>{order.order_details[0].productDetails.product_unit}</span>
          </div>
        </div>
        <div className='w-full max-w-[300px]'>
          <Button
            content={"Track order"}
            large
            onClick={() => {
              navigate(
                `/order/tracking?order_id=${order.order_transaction_id}`
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
