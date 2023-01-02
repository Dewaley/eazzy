import React from "react";

const CheckoutProduct = ({ item, total }) => {
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className='flex items-center gap-2'>
      <img
        src={"https://media.tryeazzy.co/" + item.product_image}
        alt=''
        className='w-[40%]'
      />
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-medium'>{item.product_name}</h1>
        <span className='text-greenish text-lg'>
          &#x20A6;{numberWithCommas(item.product_price * item.caryQuantity)}
        </span>
        <span>Qty: {item.product_unit}</span>
      </div>
    </div>
  );
};

export default CheckoutProduct;
