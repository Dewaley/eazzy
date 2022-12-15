import onions from "../../assets/onions.png";
import Button from "../../components/Button/Button";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { useState, useEffect } from "react";
import { UseShoppingCartData } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [total, setTotal] = useState(0);
  const [cartData, setCartData] = UseShoppingCartData([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cartData.length < 1) {
      navigate("/cart");
    } else {
      const sum = cartData?.reduce(
        (add, item) => add + item?.product_price * item?.caryQuantity,
        0
      );
      setTotal(sum);
    }
  }, [cartData]);

  if (cartData?.length > 0) {
    return (
      <div className='bg-[#EBF2EB] flex flex-col md:flex-row gap-6 md:gap-8 justify-center min-h-[60vh] px-3 py-8 md:py-12 md:px-8'>
        <div className='flex flex-col gap-8 w-full bg-white px-3 md:px-6 py-6 md:w-[70vw] h-fit rounded'>
          <div className='flex flex-col gap-y-2 border-b-2 pb-2'>
            <h1 className='font-medium text-neutral-400'>Checkout</h1>
            <h4 className='font-medium'>Address details</h4>
          </div>
          <form action='' className='flex flex-col gap-6'>
            <div className='flex flex-col md:flex-row gap-4'>
              <input
                type='text'
                name=''
                id=''
                placeholder='First name'
                className='md:w-1/2 border-[1px] rounded p-2 font-lg'
              />
              <input
                type='text'
                name=''
                id=''
                placeholder='Last name'
                className='md:w-1/2 border-[1px] rounded p-2 font-lg'
              />
            </div>
            <div className='flex flex-col gap-6'>
              <input
                type='tel'
                name=''
                id=''
                placeholder='Phone Number'
                className='border-[1px] rounded p-2 font-lg'
              />
              <select
                name='states'
                id='states'
                className='w-full border-[1px] rounded p-2 font-lg'
              >
                <option value='volvo'>Ogun</option>
                <option value='saab'>Lagos</option>
                <option value='mercedes'>Oyo</option>
                <option value='audi'>Benue</option>
              </select>
              <input
                type='tel'
                name=''
                id=''
                placeholder='Delivery Address'
                className='border-[1px] rounded p-2 font-lg'
              />
            </div>
            <div className='flex flex-row gap-4'>
              <input
                type='text'
                name=''
                id=''
                className='w-1/2 border-[1px] rounded p-2 font-lg'
                placeholder='Date'
                onFocus={(e) => (e.target.type = "date")}
              />
              <input
                type='text'
                name=''
                id=''
                onFocus={(e) => (e.target.type = "time")}
                placeholder='Time'
                className='w-1/2 border-[1px] rounded p-2 font-lg'
              />
            </div>
          </form>
        </div>
        <div className='flex flex-col gap-4 w-full bg-white px-3 md:px-6 py-6 md:w-[30vw] h-fit rounded'>
          <div className='flex flex-col gap-y-2 border-b-2 pb-2'>
            <h1 className='font-medium text-neutral-400'>Order summary</h1>
            <h4 className='font-medium'>Your order (1 item)</h4>
          </div>
          <div className='flex flex-col gap-4 py-4 border-b-2'>
            {cartData?.map((item) => (
              <CheckoutProduct key={item.product_id} item={item} />
            ))}
          </div>
          <div className='pb-3 border-b-2 flex flex-col gap-3 pt-2'>
            <div className='flex justify-between'>
              <h4>Subtotal</h4>
              <span className='font-medium'>#{total}</span>
            </div>
            <div className='flex justify-between'>
              <h4>Delivery</h4>
              <span className='font-medium'>#2,000</span>
            </div>
          </div>
          <div className='pb-3 border-b-2 pt-2 mb-3'>
            <div className='flex justify-between'>
              <h4>Total</h4>
              <span className='font-medium text-greenish'>#5,000</span>
            </div>
          </div>
          <Button content={"Place order"} large />
        </div>
      </div>
    );
  } else {
    navigate("/cart");
  }
};

export default Checkout;
