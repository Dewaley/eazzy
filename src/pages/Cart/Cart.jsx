import { MdNavigateNext } from "react-icons/md";
import onions from "../../assets/onions.png";
import cart from "../../assets/cart.svg";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const [bount, setBount] = useState(99);
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    count > 1 && setCount((prev) => prev - 1)  
  };

  return (
    <div>
      {bount > 0 ? (
        <div className='flex flex-col md:flex-row px-3 md:px-6 py-12 gap-6'>
          <div className='flex flex-col gap-8 md:w-[72%]'>
            <div className='flex justify-between border-b-2 pb-3'>
              <h1 className='font-medium'>Dewale's cart</h1>
              <h4 className='flex text-sm items-center font-light text-greenish'>
                Continue shopping
                <MdNavigateNext />
              </h4>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-4 items-center'>
                <img
                  src={onions}
                  alt=''
                  className='w-[20%] object-center object-cover'
                />
                <div className='flex flex-col gap-2 w-[80%]'>
                  <div className='flex justify-between items-center'>
                    <h1 className='text-lg font-medium'>Onions</h1>
                    <h4 className='text-lg font-medium'>
                      <RiDeleteBin6Line />
                    </h4>
                  </div>
                  <span className='border-[1px] rounded p-2 font-light w-fit'>
                    Quater of a bag
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi ea at modi neque sapiente quas qui dolor illum itaque
                    nesciunt?
                  </p>
                  <div className='flex justify-between items-center'>
                    <span className='text-lg'>#3,000</span>
                    <span className='flex items-center gap-2'>
                      <button
                        className='text-lg bg-greenish flex justify-center items-center w-8 h-8 rounded'
                        onClick={() => decrement()}
                      >
                        -
                      </button>
                      <input
                        type='number'
                        name='quantity'
                        id='quantity'
                        className='border-[1px] rounded p-2 font-light w-12 h-8 text-center rounded'
                        value={count}
                        disabled
                      />
                      <button
                        className='text-lg bg-greenish flex justify-center items-center w-8 h-8 rounded'
                        onClick={() => increment()}
                      >
                        +
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <img
                  src={onions}
                  alt=''
                  className='w-[20%] object-center object-cover'
                />
                <div className='flex flex-col gap-2 w-[80%]'>
                  <div className='flex justify-between'>
                    <h1 className='text-lg font-medium'>Onions</h1>
                    <h4 className='text-lg font-medium'>
                      <RiDeleteBin6Line />
                    </h4>
                  </div>
                  <span className='border-[1px] rounded p-2 font-light w-fit'>
                    Quater of a bag
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi ea at modi neque sapiente quas qui dolor illum itaque
                    nesciunt?
                  </p>
                  <div className='flex justify-between items-center'>
                    <span className='text-lg'>#3,000</span>
                    <span className='flex items-center gap-2'>
                      <button
                        className='text-lg bg-greenish flex justify-center items-center w-8 h-8 rounded'
                        onClick={() => decrement()}
                      >
                        -
                      </button>
                      <input
                        type='number'
                        name='quantity'
                        id='quantity'
                        className='border-[1px] rounded p-2 font-light w-12 h-8 text-center rounded'
                        value={count}
                        disabled
                      />
                      <button
                        className='text-lg bg-greenish flex justify-center items-center w-8 h-8 rounded'
                        onClick={() => increment()}
                      >
                        +
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-[28%]'>
            <h1 className='border-b-2 pb-3 text-lg font-medium'>
              Checkout summary
            </h1>
            <div className='py-6 border-b-2 flex flex-col gap-3'>
              <div className='flex justify-between'>
                <h4>Subtotal</h4>
                <span>#3,000</span>
              </div>
              <div className='flex justify-between'>
                <h4>Delivery</h4>
                <span>#2,000</span>
              </div>
            </div>
            <div className='flex justify-between py-6'>
              <h4>Total</h4>
              <span>#5,000</span>
            </div>
            <Button content={"Check out"} large />
          </div>
        </div>
      ) : (
        <div className='bg-[#E5E5E5] flex justify-center items-center min-h-[60vh] py-8'>
          <div className='flex flex-col items-center justify-center bg-white md:w-[70vw] p-8 gap-4 rounded'>
            <img src={cart} alt='' />
            <h4 className='text-lg font-medium text-center'>
              Your cart is empty
            </h4>
            <p className='font-light text-center'>
              See our categories and shop from us
            </p>
            <a href='/'>
              <Button big content={"Start shopping"} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
