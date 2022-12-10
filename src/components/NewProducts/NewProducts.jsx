import advocado from "../../assets/advocado.png";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import ProductServices from "../../services/ProductServices";

const NewProducts = () => {
  const [count, setCount] = useState(1);

  const [products, setProducts] = useState([]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    count > 1 && setCount((prev) => prev - 1);
  };

  useEffect(() => {
    ProductServices.fetchAllProducts().then((res) => {
      console.log(res);
      setProducts(res?.data);
    });
  }, []);

  return (
    <div className='px-3 md:px-6 flex flex-col items-center gap-12 py-8'>
      <h2 className='text-3xl text-center font-medium'>New Products</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:w-[90vw]'>
        {products.map((item) => (
          <div
            key={item.product_id}
            className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'
          >
            <img
              src={item.product_image}
              alt=''
              className='w-full object-cover object-center'
            />
            <div className='flex flex-col gap-2'>
              <span>{item.product_name}</span>
              <p className='flex justify-between'>
                <span>&#x20A6;{ item.product_price}</span>
                <span>({item.product_unit})</span>
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
              <Button content={"Add to Cart"} large />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
