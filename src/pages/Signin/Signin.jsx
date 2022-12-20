import illustration from "../../assets/illustration.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import AuthServices from "../../services/AuthServices";
import { useState } from "react";
import { UseShoppingCartData } from "../../context/CartContext";
import ProductServices from "../../services/ProductServices";
import { useUserContext } from "../../context/UserContext";
import { UseCart } from "../../context/UnAuthCart";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const { user, setUser } = useUserContext(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [cartData, setCartData] = UseShoppingCartData([]);
  const { state, dispatch } = UseCart();

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    AuthServices.signin(data).then((res) => {
      console.log(res);
      if (res?.status === 200) {
        sessionStorage.setItem("geeToken", res.data?.access_token);
        sessionStorage.setItem("geeId", res.data?.user?.id);
        if (localStorage.getItem("geeUnauthCart")) {
          ProductServices.emptyCart()
            .then((res) => {
              console.log(res);
            })
            .then(() => {
              state.items.map((item) => {
                const data = {
                  product_id: item?.product_id,
                  quantity: item?.caryQuantity,
                };
                ProductServices.addToCart(data).then((res) => {
                  console.log(res);
                });
                return item;
              });
            })
            .then(() => {
              ProductServices.fetchCart()
                .then((res) => {
                  console.log(res?.data?.cart);
                  setCartData(res?.data?.cart);
                  setUser(true);
                })
                .then(() => {
                  setLoading(false);
                  navigate("/");
                  localStorage.removeItem("geeUnauthCart")
                });
            });
        } else {
          ProductServices.fetchCart()
            .then((res) => {
              console.log(res?.data?.cart);
              setCartData(res?.data?.cart);
              setUser(true);
            })
            .then(() => {
              setLoading(false);
              navigate("/");
            });
        }
      } else {
        setErr(res?.data?.message);
        setLoading(false);
        setTimeout(() => {
          setErr("");
        }, 3000);
      }
    });
  };

  return (
    <div className='bg-greenish relative min-h-screen flex justify-center items-center py-8'>
      <img
        src={illustration}
        alt=''
        className='z-10 absolute w-full h-full object-cover object-center'
      />
      <div className='w-[90vw] max-w-[500px] bg-white rounded-md flex flex-col items-center gap-4 z-20 p-8'>
        <div>
          <img src={logo} alt='' className='h-12 mb-2' />
          <p className='text-center font-medium text-lg'>Welcome back!</p>
          <p className='text-red-500 text-center'>{err}</p>
        </div>
        <form
          action=''
          className='flex flex-col gap-4 w-full'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type='email'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            placeholder='Email Address'
            {...register("email")}
          />
          <input
            type='password'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            placeholder='Password'
            {...register("password")}
          />
          <p className='text-neutral-400 mb-4 font-light text-sm sm:text-base'>
            Forgot password?{" "}
            <Link to='/passwordreset' className='text-greenish'>
              Reset here
            </Link>
          </p>
          <Button content={"Log in"} large type={"submit"} loader={loading} />
        </form>
        <div className='flex flex-col gap-2 mt-4 items-center font-light'>
          <p className='text-center text-neutral-400'>
            New to the space?
            <Link to='/register/business' className='pl-2 text-greenish'>
              Register
            </Link>
          </p>
          {/* <div className='flex divide-x-[1px] divide-greenish text-greenish text-sm sm:text-base text-center'>
            <Link to='/register/business' className='pr-2'>
              Register as business
            </Link>
            <Link to='/register/individual' className='pl-2'>
              Register as individual
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signin;
