import React from "react";

const CheckoutProduct = ({ item }) => {
  return (
    <div className='flex items-center gap-2'>
      <img src={"https://media.tryeazzy.co/" + item.product_image} alt='' className='w-[40%]' />
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-medium'>{item.product_name}</h1>
        <span className='text-greenish text-lg'>#{item.product_price}</span>
              <span>Qty: {item.product_unit}</span>
      </div>
    </div>
  );
};

export default CheckoutProduct;
