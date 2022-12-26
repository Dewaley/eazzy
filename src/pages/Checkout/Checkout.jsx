import AuthServices from "../../services/AuthServices";
import Button from "../../components/Button/Button";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { useState, useEffect } from "react";
import { UseShoppingCartData } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import PaymentServices from "../../services/PaymentServices";

const Checkout = () => {
  const [user, setUser] = useState({});
  const [total, setTotal] = useState(0);
  const [delivery, setDelivery] = useState(2000);
  const [cartData, setCartData] = UseShoppingCartData([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    AuthServices.fetchUser().then((res) => {
      console.log(res?.data);
      setUser({
        first_name: res?.data?.first_name,
        last_name: res?.data?.last_name,
        name: user.first_name,
        email: res?.data?.email,
        phone: res?.data?.phone,
        address: res?.data?.home_address,
        location: "",
        date: "",
        time: "",
      });
    });
  }, []);

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

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
                value={user?.first_name}
                placeholder='First name'
                className='md:w-1/2 border-[1px] rounded p-2 font-lg'
                onChange={(e) => {
                  setUser({
                    ...user,
                    name: e.target.value,
                  });
                }}
              />
              <input
                type='text'
                name=''
                id=''
                value={user?.last_name}
                placeholder='Last name'
                className='md:w-1/2 border-[1px] rounded p-2 font-lg'
                onChange={(e) => {
                  setUser({
                    ...user,
                    last_name: e.target.value,
                  });
                }}
              />
            </div>
            <div className='flex flex-col gap-6'>
              <input
                type='tel'
                name=''
                id=''
                value={user?.phone}
                placeholder='Phone Number'
                className='border-[1px] rounded p-2 font-lg'
                onChange={(e) => {
                  setUser({
                    ...user,
                    phone: e.target.value,
                  });
                }}
              />
              <select
                name='states'
                id='states'
                className='w-full border-[1px] rounded p-2 font-lg'
                onChange={(e) => {
                  setUser({
                    ...user,
                    address: user.address + e.target.value,
                  });
                }}
              >
                <option value=''>-- Choose an option --</option>
                <option value='Ogun'>Ogun</option>
                <option value='Lagos'>Lagos</option>
                <option value='Oyo'>Oyo</option>
                <option value='Benue'>Benue</option>
              </select>
              <input
                type='tel'
                name=''
                id=''
                placeholder='Delivery Address'
                value={user?.address}
                className='border-[1px] rounded p-2 font-lg'
                onChange={(e) => {
                  setUser({
                    ...user,
                    address: e.target.value,
                  });
                }}
              />
            </div>
            <div className='flex flex-row gap-4'>
              <input
                type='date'
                name=''
                id=''
                className='w-1/2 border-[1px] rounded p-2 font-lg'
                placeholder='Date'
                onChange={(e) => {
                  setUser({
                    ...user,
                    date: e.target.value,
                  });
                }}
              />
              <input
                type='time'
                name=''
                id=''
                placeholder='Time'
                className='w-1/2 border-[1px] rounded p-2 font-lg'
                onChange={(e) => {
                  setUser({
                    ...user,
                    time: e.target.value,
                  });
                }}
              />
            </div>
          </form>
        </div>
        <div className='flex flex-col gap-4 w-full bg-white px-3 md:px-6 py-6 md:w-[30vw] h-fit rounded'>
          <div className='flex flex-col gap-y-2 border-b-2 pb-2'>
            <h1 className='font-medium text-neutral-400'>Order summary</h1>
            <h4 className='font-medium'>
              Your order ({cartData.length + " item(s)"})
            </h4>
          </div>
          <div className='flex flex-col gap-4 py-4 border-b-2'>
            {cartData?.map((item) => (
              <CheckoutProduct
                key={item.product_id}
                item={item}
                total={total}
              />
            ))}
          </div>
          <div className='pb-3 border-b-2 flex flex-col gap-3 pt-2'>
            <div className='flex justify-between'>
              <h4>Subtotal</h4>
              <span className='font-medium'>
                &#x20A6;{numberWithCommas(total)}
              </span>
            </div>
            <div className='flex justify-between'>
              <h4>Delivery</h4>
              <span className='font-medium'>
                &#x20A6;{numberWithCommas(delivery)}
              </span>
            </div>
          </div>
          <div className='pb-3 border-b-2 pt-2 mb-3'>
            <div className='flex justify-between'>
              <h4>Total</h4>
              <span className='font-medium text-greenish'>
                &#x20A6;{numberWithCommas(delivery + total)}
              </span>
            </div>
          </div>
          <Button
            content={"Place order"}
            large
            loader={loading}
            onClick={() => {
              const data = {
                first_name: user?.first_name,
                last_name: user?.last_name,
                address: user?.address,
                datetime: user?.date + " " + user?.time,
                phone: user?.phone,
                email: user?.email,
                location: user?.location,
              };
              setLoading(true);
              PaymentServices.placeOrder(data).then((res) => {
                console.log(res);
                setLoading(false);
                window.location.assign(res?.data?.orderDetails?.order_checkout_url)
              });
            }}
          />
        </div>
      </div>
    );
  } else {
    navigate("/cart");
  }
};

export default Checkout;

//"SQLSTATE[HY000]: General error: 1364 Field 'order_amount' doesn't have a default value (SQL: insert into `orders` (`user_id`, `order_details`, `order_transaction_id`, `order_checkout_url`, `order_status`, `updated_at`, `created_at`) values (piheOcUpKY4pIeMqFHkOM4mVqgDWZC9xfWlAXEmNDwTfFwbcWi6vjqOXbbHOEjPn, [{"product_id":"gxQa8NofvS8JF2j6gDTa63hEAW1aC2rsLs6t3d3n7BlEK8XVZMVwCTTMrfAqa9J4","quantity":5},{"product_id":"HPHpO8jWu5vVYiiPsCiB3gCOCek13VQPsYJulKH6vJaVCCnw0DSde1lxDIdgLIFl","quantity":5}], aSj8g41atr1oJWvHCFRDKoCmB7gkeQDv4RequOoopCZ6cgpsq5FRjdk2a1Q8CEmJ, https://sandbox.sdk.monnify.com/checkout/MNFY|91|20221226165602|000360, Payment Pending, 2022-12-26 15:56:02, 2022-12-26 15:56:02))"
