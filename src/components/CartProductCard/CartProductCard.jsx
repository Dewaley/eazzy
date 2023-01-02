import { useState } from "react";
import onions from "../../assets/onions.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import ProductServices from "../../services/ProductServices";
import { UseShoppingCartData } from "../../context/CartContext";
import { ImSpinner6 } from "react-icons/im";

const CartProductCard = ({ item, user, dispatch }) => {
  const [cartData, setCartData] = UseShoppingCartData([]);
  const [loading, setLoading] = useState(false);

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const delItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      item: {
        ...item,
      },
    });
  };

  const updateItem = (data) => {
    dispatch({
      type: "UPDATE_ITEM",
      item: data,
    });
  };

  return (
    <div className='flex gap-4 items-center'>
      <img
        src={"https://media.tryeazzy.co/" + item.product_image}
        alt=''
        className='w-[20%] object-center object-cover'
      />
      <div className='flex flex-col gap-2 w-[80%]'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg font-medium'>{item.product_name}</h1>
          <h4 className='text-lg font-medium'>
            {user ? (
              <RiDeleteBin6Line
                className='cursor-pointer'
                onClick={() => {
                  setLoading(true);
                  ProductServices.delCart(item.product_id).then((res) => {
                    ProductServices.fetchCart().then((response) => {
                      console.log(response?.data?.cart);
                      setCartData(response?.data?.cart);
                      setLoading(false);
                    });
                  });
                }}
              />
            ) : (
              <RiDeleteBin6Line
                className='cursor-pointer'
                onClick={() => {
                  delItem();
                }}
              />
            )}
          </h4>
        </div>
        <span className='border-[1px] rounded p-2 font-light w-fit'>
          {item.product_unit}
        </span>
        <p>{item?.product_description.slice(0, 120) + "..."}</p>
        <div className='flex justify-between items-center'>
          <span className='text-lg'>
            &#x20A6;{numberWithCommas(item.product_price)}
          </span>
          {user ? (
            <span className='flex items-center gap-2'>
              <button
                className='text-lg bg-greenish flex justify-center items-center w-8 h-8 rounded text-white'
                onClick={() => {
                  if (item.caryQuantity > 1) {
                    setLoading(true);
                    const data = {
                      quantity: item.caryQuantity - 1,
                    };
                    ProductServices.editCart({
                      id: item.product_id,
                      data: data,
                    }).then((res) => {
                      ProductServices.fetchCart()
                        .then((response) => {
                          console.log(response?.data?.cart);
                          setCartData(response?.data?.cart);
                        })
                        .then(() => setLoading(false));
                    });
                  }
                }}
              >
                -
              </button>
              <div className='w-12 h-8 border-[1px] rounded bg-[#FAFAFA] flex justify-center items-center'>
                {loading ? (
                  <ImSpinner6 className='animate-spin' />
                ) : (
                  item.caryQuantity
                )}
              </div>
              <button
                className='text-lg bg-greenish flex justify-center items-center w-8 h-8 rounded text-white'
                onClick={() => {
                  if (item.caryQuantity + 1 <= item.product_quantity) {
                    setLoading(true);
                    const data = {
                      quantity: item.caryQuantity + 1,
                    };
                    ProductServices.editCart({
                      id: item.product_id,
                      data: data,
                    }).then((res) => {
                      ProductServices.fetchCart().then((response) => {
                        console.log(response?.data?.cart);
                        setCartData(response?.data?.cart);
                        setLoading(false);
                      });
                    });
                  }
                }}
              >
                +
              </button>
            </span>
          ) : (
            <span className='flex items-center gap-2'>
              <button
                className='text-lg bg-greenish flex justify-center items-center w-8 h-8 rounded text-white'
                onClick={() => {
                  console.log(item);
                  updateItem({ ...item, caryQuantity: item.caryQuantity - 1 });
                }}
              >
                -
              </button>
              <div className='w-12 h-8 border-[1px] rounded bg-[#FAFAFA] flex justify-center items-center'>
                {loading ? (
                  <ImSpinner6 className='animate-spin' />
                ) : (
                  item.caryQuantity
                )}
              </div>
              <button
                className='text-lg bg-greenish flex justify-center items-center w-8 h-8 rounded text-white'
                onClick={() => {
                  console.log(item);
                  updateItem({ ...item, caryQuantity: item.caryQuantity + 1 });
                }}
              >
                +
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
