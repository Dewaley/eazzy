import PlaceholderLoading from "react-placeholder-loading";
import Button from "../../components/Button/Button";
import ProductServices from "../../services/ProductServices";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { UseShoppingCartData } from "../../context/CartContext";
import { Link } from "react-router-dom";
import SearchLayout from "../../layout/searchLayout";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [category, setCategory] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    count > 1 && setCount((prev) => prev - 1);
  };
  const [cartData, setCartData] = UseShoppingCartData([]);

  useEffect(() => {
    ProductServices.fetchSingleProduct(id).then((res) => {
      console.log(res?.data);

      ProductServices.fetchCategories().then((response) => {
        console.log(response);
        const findId = response.data?.find(
          (e) => e.category_id === res?.data[0]?.product_category_id
        );
        console.log("found", findId);
        setCategory(findId);
        setProduct(res?.data[0]);
      });
    });
  }, []);

  return (
    <div>
      {product?.product_name ? (
        <div className='px-3 md:px-6 flex flex-col items-center gap-6 py-8'>
          <div className='w-full md:w-[90vw]'>
            <div className='capitalize'>
              <Link to='/'>Home</Link> {">"}{" "}
              <Link to={`/category/${category?.category_id}`} className=''>
                {category?.category_name}
              </Link>{" "}
              {">"}{" "}
              <span className='text-neutral-400'>{product?.product_name}</span>
            </div>
          </div>
          <div className='md:w-[90vw] flex flex-col gap-y-8 md:flex-row items-center justify-between'>
            <img
              src={"https://media.tryeazzy.co/" + product?.product_image}
              alt=''
              className='w-full md:w-[40%]'
            />
            <div className='md:w-[55%] flex flex-col gap-4'>
              <h1 className='text-3xl font-medium'>{product.product_name}</h1>
              <p>{product.product_description}</p>
              <div className='flex flex-col justify-between md:flex-row gap-y-2'>
                <span className='flex items-center justify-between gap-2 w-full md:w-40'>
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
                <span className='hidden md:block'>
                  <Button
                    loader={loading}
                    content={"Add to Cart"}
                    onClick={() => {
                      if (sessionStorage.getItem("geeToken")) {
                        const data = {
                          product_id: product.product_id,
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
                </span>
                <div className='w-full md:hidden'>
                  <Button
                    loader={loading}
                    large
                    content={"Add to Cart"}
                    onClick={() => {
                      if (sessionStorage.getItem("geeToken")) {
                        const data = {
                          product_id: product.product_id,
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
            </div>
          </div>
        </div>
      ) : (
        <div className='px-3 md:px-6 flex flex-col items-center gap-6 py-8'>
          <div className='w-full md:w-[90vw]'>
            <div className='capitalize flex items-center gap-1'>
              <span>Home</span> {">"}{" "}
              <span className='flex'>
                <PlaceholderLoading shape='rect' width={50} height={10} />
              </span>{" "}
              {">"}{" "}
              <span className='text-neutral-400 flex'>
                <PlaceholderLoading shape='rect' width={50} height={10} />
              </span>
            </div>
          </div>
          <div className='w-full md:w-[90vw] flex flex-col gap-y-8 md:flex-row items-center justify-between overflow-hidden'>
            <div className='w-full md:w-[40%] overflow-hidden'>
              <PlaceholderLoading shape='rect' width={1000} height={400} />
            </div>
            <div className='md:w-[55%] w-full overflow-hidden flex flex-col gap-4'>
              <PlaceholderLoading shape='rect' width={100} height={20} />
              <div>
                <PlaceholderLoading shape='rect' width={1000} height={250} />
                </div>
                <div className='flex flex-col justify-between md:flex-row gap-y-2'>
                <span className='flex items-center justify-between gap-2 w-full md:w-40'>
                  <button
                    className='text-lg text-white bg-greenish/60 flex justify-center items-center w-8 h-8 rounded'
                  >
                    -
                  </button>
                  <input
                    type='number'
                    name='quantity'
                    id='quantity'
                    className='border-[1px] rounded p-2 font-light w-[60%] h-8 text-center rounded'
                    value={1}
                    disabled
                  />
                  <button
                    className='text-lg text-white bg-greenish flex justify-center items-center w-8 h-8 rounded'
                  >
                    +
                  </button>
                </span>
                <span className='hidden md:block'>
                  <Button
                    content={"Add to Cart"}
                  />
                </span>
                <div className='w-full md:hidden'>
                  <Button
                    large
                    content={"Add to Cart"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchLayout(Product);
