import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { BiHelpCircle, BiUser } from "react-icons/bi";
import { BsChevronDown, BsBox } from "react-icons/bs";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { UseSearchData } from "../../context/SearchContext";
import { UseShoppingCartData } from "../../context/CartContext";
import ProductServices from "../../services/ProductServices";
import AuthServices from "../../services/AuthServices";
import { useUserContext } from "../../context/UserContext";
import { UseCart } from "../../context/UnAuthCart";

const Navbar = () => {
  const [helpOpen, setHelpOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [searched, setSearched] = useState("");
  const [categories, setCategories] = useState([]);
  const { user, setUser } = useUserContext(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const pathname = location.pathname;

  const [searchParams, setSearchParams, searchedData, setSearchedData] =
    UseSearchData();

  const { state, dispatch } = UseCart();

  const [cartData, setCartData] = UseShoppingCartData([]);

  const search = () => {
    ProductServices.searchProduct(searched).then((res) => {
      console.log(res);
      setSearchParams({ search: searched });
      setSearchedData(res?.data);
    });
  };

  useEffect(() => {
    ProductServices.fetchCategories().then((res) => {
      console.log(res);
      setCategories(res?.data);
    });
    if (sessionStorage.getItem("geeToken")) {
      AuthServices.fetchUser().then((res) => {
        console.log(res.data.message);
        if (res?.data?.message === "Unauthenticated.") {
          setUser(false);
        } else {
          setUser(true);
          ProductServices.fetchCart().then((res) => {
            console.log(res?.data?.cart);
            setCartData(res?.data?.cart);
          });
        }
      });
    }
  }, [sessionStorage.getItem("geeToken")]);

  useEffect(() => {
    console.log(state);
    //   if (state.items.length > 0) {
    //     state.items.map((item) => {
    //       const dat = {
    //         quantity: item.quantity,
    //       };
    //       // ProductServices.editCart({ id: item.id, data: dat }).then((res) => {
    //       //   console.log(res);
    //       // });
    //       return item
    //     });
    //   }
  }, [state]);

  return (
    <div
      className={`${
        pathname.includes("/signin") ||
        pathname.includes("/signup") ||
        pathname.includes("/passwordreset") ||
        pathname.includes("/order/confirm")  ||
        pathname.includes("/passwordChange")
          ? "hidden"
          : "block"
      }`}
    >
      <div className='flex justify-between items-center p-6 font-poppins h-16 relative gap-2'>
        <Link
          to='/'
          className='text-2xl italic z-40'
          onClick={() => {
            setHelpOpen(false);
            setAccountOpen(false);
            setMenu(false);
          }}
        >
          <img src={logo} alt='' className='w-32' />
        </Link>
        <form
          action=''
          className={`${
            user ? "w-[55%]" : "w-[60%]"
          } hidden md:flex items-center gap-4 justify-center border-2 rounded`}
          onSubmit={(e) => {
            e.preventDefault();
            search();
          }}
        >
          <input
            onChange={(e) => {
              setSearched(e.target.value);
            }}
            value={searched}
            type='text'
            name=''
            id=''
            placeholder='Search by cartegory, brand and product'
            className='p-2 w-[85%] outline-none'
          />
          <button type="submit" className="text-greenish hover:bg-greenish px-4 py-2 rounded-r hover:text-white transition">SEARCH</button>
        </form>

        <div className='flex items-center text-blackish gap-4 z-40'>
          <div className='hidden md:flex items-center justify-center z-40 gap-4'>
            {user && (
              <div
                className='hidden md:flex items-center justify-center h-6 rounded gap-1 cursor-pointer'
                onClick={() => {
                  setAccountOpen(!accountOpen);
                  setHelpOpen(false);
                  setMenu(false);
                }}
              >
                <BiUser />
                <span>Account</span>
                <BsChevronDown
                  className={`transition duration-500 ${
                    accountOpen && "-rotate-180"
                  }`}
                />
              </div>
            )}
            <div
              className='hidden md:flex items-center justify-center h-6 rounded gap-1 cursor-pointer'
              onClick={() => {
                setHelpOpen(!helpOpen);
                setAccountOpen(false);
                setMenu(false);
              }}
            >
              <BiHelpCircle />
              <span>Help</span>
              <BsChevronDown
                className={`transition duration-500 ${
                  helpOpen && "-rotate-180"
                }`}
              />
            </div>
            {user ? (
              <Button
                loader={loading}
                content={"Logout"}
                large
                onClick={() => {
                  setLoading(true);
                  AuthServices.logout()
                    .then((res) => {
                      console.log(res.data);
                      sessionStorage.removeItem("geeToken");
                      setCartData([]);
                      setLoading(false);
                    })
                    .then(() => {
                      setHelpOpen(false);
                      setAccountOpen(false);
                      setMenu(false);
                      setUser(false);
                      navigate("/");
                    });
                }}
              />
            ) : (
              <Link
                to={"/signup"}
                onClick={() => {
                  setHelpOpen(false);
                  setAccountOpen(false);
                  setMenu(false);
                }}
              >
                <Button content={"Sign up"} large />
              </Link>
            )}
          </div>
          <Link
            to='/cart'
            className='flex items-center justify-center h-6 px-1 rounded border-[1px] border-blackish gap-1'
            onClick={() => {
              setHelpOpen(false);
              setAccountOpen(false);
              setMenu(false);
            }}
          >
            <AiOutlineShoppingCart />{" "}
            {user ? (
              <span className='text-sm'>{cartData?.length || 0}</span>
            ) : (
              <span className='text-sm'>{state?.items?.length}</span>
            )}
          </Link>
          <span
            className='flex items-center justify-center h-6 rounded cursor-pointer'
            onClick={() => {
              setHelpOpen(false);
              setAccountOpen(false);
              setMenu(!menu);
            }}
          >
            <AiOutlineMenu />
          </span>
        </div>
        {helpOpen && (
          <ul className='absolute px-3 py-2 top-[4rem] right-[8rem] hidden md:flex flex-col bg-white w-44 z-40 gap-2 justify-center rounded-b'>
            {user && (
              <Link
                to='/order/tracking'
                className='transition hover:text-greenish cursor-pointer'
                onClick={() => {
                  setHelpOpen(false);
                  setAccountOpen(false);
                  setMenu(false);
                }}
              >
                Track order
              </Link>
            )}
            <Link
              to='/faqs'
              className='transition hover:text-greenish cursor-pointer'
              onClick={() => {
                setHelpOpen(false);
                setAccountOpen(false);
                setMenu(false);
              }}
            >
              FAQs
            </Link>
            <Link
              to='/contact'
              onClick={() => {
                setHelpOpen(false);
                setAccountOpen(false);
                setMenu(false);
              }}
            >
              <Button content={"Contact us"} big />
            </Link>
          </ul>
        )}
        {menu && (
          <div className='absolute px-3 py-2 top-[4rem] right-[0] flex flex-col bg-white w-[80vw] max-w-[15rem] md:w-48 z-40 gap-4 justify-between rounded-b md:h-auto'>
            <ul className='flex flex-col gap-2'>
              <h4 className='text-lg font-medium'>Categories</h4>
              {categories.map((item) => (
                <Link
                  to={`/category/${item.category_id}`}
                  className='transition hover:text-greenish cursor-pointer'
                  onClick={() => {
                    setHelpOpen(false);
                    setAccountOpen(false);
                    setMenu(false);
                  }}
                >
                  {item.category_name}
                </Link>
              ))}
            </ul>
            <ul className='md:hidden flex flex-col gap-2'>
              <h4 className='text-lg font-medium'>Account</h4>
              {user && (
                <Link
                  to="/profile"
                  className='transition hover:text-greenish cursor-pointer items-center flex gap-2'
                  onClick={() => {
                    setHelpOpen(false);
                    setAccountOpen(false);
                    setMenu(false);
                  }}
                >
                  <BiUser />
                  Account settings
                </Link>
              )}
              {user && (
                <Link
                  to='/orders'
                  className='transition hover:text-greenish cursor-pointer items-center flex gap-2'
                  onClick={() => {
                    setHelpOpen(false);
                    setAccountOpen(false);
                    setMenu(false);
                  }}
                >
                  <BsBox />
                  Orders
                </Link>
              )}
              {user ? (
                <Button
                  loader={loading}
                  content={"Logout"}
                  large
                  onClick={() => {
                    setLoading(true);
                    AuthServices.logout()
                      .then((res) => {
                        console.log(res.data);
                        sessionStorage.removeItem("geeToken");
                        setCartData([]);
                        setLoading(false);
                      })
                      .then(() => {
                        setHelpOpen(false);
                        setAccountOpen(false);
                        setMenu(false);
                        setUser(false);
                        navigate("/");
                      });
                  }}
                />
              ) : (
                <Link
                  to={"/signup"}
                  onClick={() => {
                    setHelpOpen(false);
                    setAccountOpen(false);
                    setMenu(false);
                  }}
                >
                  <Button content={"Sign up"} large />
                </Link>
              )}
            </ul>
            <ul className='md:hidden flex flex-col gap-2'>
              <h4 className='text-lg font-medium'>Help</h4>
              {user && (
                <Link
                  to='/order/tracking'
                  className='transition hover:text-greenish cursor-pointer'
                  onClick={() => {
                    setHelpOpen(false);
                    setAccountOpen(false);
                    setMenu(false);
                  }}
                >
                  Track order
                </Link>
              )}
              <Link
                to='/faqs'
                className='transition hover:text-greenish cursor-pointer'
                onClick={() => {
                  setHelpOpen(false);
                  setAccountOpen(false);
                  setMenu(false);
                }}
              >
                FAQs
              </Link>
              <Link
                to='/contact'
                onClick={() => {
                  setHelpOpen(false);
                  setAccountOpen(false);
                  setMenu(false);
                }}
              >
                <Button content={"Contact us"} large />
              </Link>
            </ul>
          </div>
        )}
        {accountOpen && (
          <ul className='absolute px-3 py-2 top-[4rem] md:right-[14rem] hidden md:flex flex-col bg-white w-48 z-40 gap-2 justify-center rounded-b'>
            {/* {user ? (
              <Button
                loader={loading}
                content={"Logout"}
                large
                onClick={() => {
                  setLoading(true);
                  AuthServices.logout()
                    .then((res) => {
                      console.log(res.data);
                      sessionStorage.removeItem("geeToken");
                      setCartData([]);
                      setLoading(false);
                    })
                    .then(() => {
                      setHelpOpen(false);
                      setAccountOpen(false);
                      setMenu(false);
                      setUser(false);
                      navigate("/");
                    });
                }}
              />
            ) : (
              <Link
                to={"/signup"}
                onClick={() => {
                  setHelpOpen(false);
                  setAccountOpen(false);
                  setMenu(false);
                }}
              >
                <Button content={"Sign up"} large />
              </Link>
            )} */}
            {user && (
              <li className='transition hover:text-greenish cursor-pointer items-center flex gap-2'>
                <Link
                  to='/profile'
                  className='items-center flex gap-2'
                  onClick={() => {
                    setHelpOpen(false);
                    setAccountOpen(false);
                    setMenu(false);
                  }}
                >
                  <BiUser />
                  Account settings
                </Link>
              </li>
            )}
            {user && (
              <Link
                to='/orders'
                className='transition hover:text-greenish cursor-pointer items-center flex gap-2'
                onClick={() => {
                  setHelpOpen(false);
                  setAccountOpen(false);
                  setMenu(false);
                }}
              >
                <BsBox />
                Orders
              </Link>
            )}
          </ul>
        )}
        {(helpOpen || accountOpen || menu) && (
          <div
            className='z-30 w-full h-screen fixed top-0 left-0'
            onClick={() => {
              setHelpOpen(false);
              setAccountOpen(false);
              setMenu(false);
            }}
          ></div>
        )}
      </div>
      <form
        action=''
        className='md:hidden flex items-center gap-4 justify-center mx-6 mb-2 border-2 rounded'
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
      >
        <input
          onChange={(e) => {
            setSearched(e.target.value);
          }}
          value={searched}
          type='text'
          name=''
          id=''
          placeholder='Search by cartegory, brand and product'
          className='p-2 w-[85%] outline-none'
          />
          <button type="submit" className="text-greenish hover:bg-greenish px-4 py-2 rounded-r hover:text-white transition">SEARCH</button>
      </form>
    </div>
  );
};

export default Navbar;
