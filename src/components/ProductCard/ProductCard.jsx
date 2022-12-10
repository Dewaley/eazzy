import { useState } from "react";
import Button from "../Button/Button";
import ProductServices from "../../services/ProductServices";
import { Link } from "react-router-dom";
import { UseShoppingCartData } from "../../context/CartContext";

const ProductCard = ({ item }) => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    count > 1 && setCount((prev) => prev - 1);
  };
  const [cartData, setCartData] = UseShoppingCartData([]);

  return (
    <div
      key={item.product_id}
      className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'
    >
      <Link to={`/category/product/${item.product_id}`}>
        <img
          src={"https://media.tryeazzy.co/" + item.product_image}
          alt=''
          className='w-full h-48 object-cover object-center'
        />
      </Link>
      <div className='flex flex-col gap-2'>
        <Link to={`/category/product/${item.product_slug}`}>
          <span className='text-sm md:text-base'>{item.product_name}</span>
        </Link>
        <p className='flex justify-between md:text-sm text-xs items-center'>
          <span>&#x20A6;{item.product_price}</span>
          <span className=''>({item.product_unit})</span>
        </p>
        <span className='flex items-center justify-between gap-2'>
          <button
            className='text-lg text-white bg-greenish/60 flex justify-center items-center w-8 h-8 rounded'
            onClick={() => decrement()}
          >
            -
          </button>
          <input
            type='number'
            name='quantity'
            id='quantity'
            className='border-[1px] rounded p-2 font-light w-[60%] h-8 text-center rounded'
            value={count}
            disabled
          />
          <button
            className='text-lg text-white bg-greenish flex justify-center items-center w-8 h-8 rounded'
            onClick={() => increment()}
          >
            +
          </button>
        </span>
        <Button
          loader={loading}
          content={"Add to Cart"}
          large
          font={"text-xs md:text-base"}
          onClick={() => {
            if (sessionStorage.getItem("geeToken")) {
              const data = {
                product_id: item?.product_id,
                quantity: count,
              };
              setLoading(true);
              ProductServices.addToCart(data).then((res) => {
                console.log(res);
                setCount(1);
                ProductServices.fetchCart().then((response) => {
                  console.log(response?.data?.cart);
                  setCartData(response?.data?.cart);
                  setLoading(false);
                });
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
