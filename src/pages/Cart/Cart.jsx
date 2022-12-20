import { MdNavigateNext } from "react-icons/md";
import cart from "../../assets/cart.svg";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { UseShoppingCartData } from "../../context/CartContext";
import CartProductCard from "../../components/CartProductCard/CartProductCard";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { UseCart } from "../../context/UnAuthCart";

const Cart = () => {
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [cartData, setCartData] = UseShoppingCartData([]);
  const { user, setUser } = useUserContext(false);
  const { state, dispatch } = UseCart();
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const sum = cartData?.reduce(
      (add, item) => add + item?.product_price * item?.caryQuantity,
      0
    );
    setTotal(sum);
  }, [cartData]);

  useEffect(() => {
    const sum = state.items?.reduce(
      (add, item) => add + item?.product_price * item?.caryQuantity,
      0
    );
    !user && setTotal(sum);
  }, [state]);

  return (
    <div>
      {user ? (
        <div>
          {cartData?.length > 0 ? (
            <div className='flex flex-col md:flex-row px-3 md:px-6 py-12 gap-6'>
              <div className='flex flex-col gap-8 md:w-[72%]'>
                <div className='flex justify-between border-b-2 pb-3'>
                  <h1 className='font-medium'>Dewale's cart</h1>
                  <Link to='/'>
                    <h4 className='flex text-sm items-center font-light text-greenish'>
                      Continue shopping
                      <MdNavigateNext />
                    </h4>
                  </Link>
                </div>
                <div className='flex flex-col gap-6'>
                  {cartData.map((item) => (
                    <CartProductCard key={item.product_id} item={item} user={user} />
                  ))}
                </div>
              </div>
              <div className='md:w-[28%]'>
                <h1 className='border-b-2 pb-3 text-lg font-medium'>
                  Checkout summary
                </h1>
                {/* <div className='py-6 border-b-2 flex flex-col gap-3'>
              <div className='flex justify-between'>
                <h4>Subtotal</h4>
                <span>#{total}</span>
              </div>
              <div className='flex justify-between'>
                <h4>Delivery</h4>
                <span>#2,000</span>
              </div>
            </div> */}
                <div className='flex justify-between py-6'>
                  <h4>Total</h4>
                  <span>&#x20A6;{numberWithCommas(total)}</span>
                </div>
                <Button
                  content={"Check out"}
                  large
                  onClick={() => navigate("/checkout")}
                />
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
      ) : (
        <div>
          {state?.items?.length > 0 ? (
            <div className='flex flex-col md:flex-row px-3 md:px-6 py-12 gap-6'>
              <div className='flex flex-col gap-8 md:w-[72%]'>
                <div className='flex justify-between border-b-2 pb-3'>
                  <h1 className='font-medium'>Dewale's cart</h1>
                  <Link to='/'>
                    <h4 className='flex text-sm items-center font-light text-greenish'>
                      Continue shopping
                      <MdNavigateNext />
                    </h4>
                  </Link>
                </div>
                <div className='flex flex-col gap-6'>
                  {state.items.map((item) => (
                    <CartProductCard
                      key={item.product_id}
                      item={item}
                      user={user}
                      dispatch={dispatch}
                    />
                  ))}
                </div>
              </div>
              <div className='md:w-[28%]'>
                <h1 className='border-b-2 pb-3 text-lg font-medium'>
                  Checkout summary
                </h1>
                {/* <div className='py-6 border-b-2 flex flex-col gap-3'>
            <div className='flex justify-between'>
              <h4>Subtotal</h4>
              <span>#{total}</span>
            </div>
            <div className='flex justify-between'>
              <h4>Delivery</h4>
              <span>#2,000</span>
            </div>
          </div> */}
                <div className='flex justify-between py-6'>
                  <h4>Total</h4>
                  <span>&#x20A6;{numberWithCommas(total)}</span>
                </div>
                <Button
                  content={"Check out"}
                  large
                  onClick={() => {
                    user ? navigate("/checkout") : navigate("/signin")
                  }}
                />
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
      )}
    </div>
  );
};

export default Cart;
