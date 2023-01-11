import AuthServices from "../../services/AuthServices";
import Button from "../../components/Button/Button";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { useState, useEffect } from "react";
import { UseShoppingCartData } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import PaymentServices from "../../services/PaymentServices";
import SearchLayout from "../../layout/searchLayout";

const Checkout = () => {
  const [user, setUser] = useState({});
  const [total, setTotal] = useState(0);
  const [delivery, setDelivery] = useState(2000);
  const [cartData, setCartData] = UseShoppingCartData([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate() + 1;
    if (day > getDaysInMonth(year, month)) {
      day = 1;
      if (month === 12) {
        month = 1;
        year += 1;
      } else {
        month += 1;
      }
    }
    month = ("0" + month).slice(-2);
    day = ("0" + day).slice(-2);
    setMinDate(year + "-" + month + "-" + day);
  }, []);

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

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

  function hasEmptyFields(obj) {
    return Object.values(obj).some((val) => val === "");
  }

  function validateDate(dateInput) {
    let date = new Date(dateInput);
    let currentDate = new Date();
    if (isNaN(date.getTime())) {
      setError("Date can't be today or a previous date");
      return false;
    } else if (date <= currentDate) {
      setError("Date can't be today or a previous date");
      return false;
    } else {
      return true;
    }
  }

  function validateTime(time) {
    // Check that the time is in the correct format (hh:mm)
    var timeFormat = /^([01]\d|2[0-3]):?([0-5]\d)$/;
    if (!timeFormat.test(time)) {
      setError("Time must be in the format hh:mm");
      return false;
    }

    // Check that the time is within the allowed range (8am to 6pm)
    var minTime = new Date("01/01/1900 8:00 AM");
    var maxTime = new Date("01/01/1900 6:00 PM");
    var selectedTime = new Date("01/01/1900 " + time);
    if (selectedTime < minTime || selectedTime > maxTime) {
      setError("Time must be between 8am and 6pm");
      return false;
    }

    setError("");
    return true;
  }

  if (cartData?.length > 0) {
    return (
      <div className='bg-[#EBF2EB] flex flex-col md:flex-row gap-6 md:gap-8 justify-center min-h-[60vh] px-3 py-8 md:py-12 md:px-8'>
        <div className='flex flex-col gap-8 w-full bg-white px-3 md:px-6 py-6 md:w-[70vw] h-fit rounded'>
          <div className='flex flex-col gap-y-2 border-b-2 pb-2'>
            <h1 className='font-medium text-neutral-400'>Checkout</h1>
            <h4 className='font-medium'>Address details</h4>
            <p className="error">{error}</p> 
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
                    location: e.target.value,
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
                type='text'
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
                // min={minDate}
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
                min='08:00'
                max='18:00'
                step='1800'
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
              setLoading(true);
              setError("");
              const data = {
                first_name: user?.first_name,
                last_name: user?.last_name,
                address: user?.address,
                datetime: user?.date + " " + user?.time,
                phone: user?.phone,
                email: user?.email,
                location: user?.location,
              };
              console.log("user", user);
              if (hasEmptyFields(user)) {
                setError("Please fill all input fields");
                setLoading(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
                // Object has empty fields
              } else {
                // Object does not have empty fields
                validateDate(user?.date);
                if (validateDate(user?.date)) {
                  validateTime(user?.time);
                  if (validateTime(user?.time)) {
                    console.log("yes");
                    PaymentServices.placeOrder(data).then((res) => {
                      console.log(res);
                      setLoading(false);
                      window.location.assign(
                        res?.data?.orderDetails?.order_checkout_url
                      );
                    });
                  } else {
                    setLoading(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                } else {
                  setLoading(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }
            }}
          />
        </div>
      </div>
    );
  } else {
    navigate("/cart");
  }
};

export default SearchLayout(Checkout);
