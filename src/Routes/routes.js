import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import Homepage from "../pages/Homepage/Homepage";
import Product from "../pages/Product/Product";
import Products from "../pages/Products/Products";
import Profile from "../pages/Profile/Profile";
import Business from "../pages/Register/Business";
import Individual from "../pages/Register/Individual";
import PasswordReset from "../pages/ResetPassword/PasswordReset";
import Signin from "../pages/Signin/Signin";
import FAQs from "../pages/FAQs/FAQs";
import OrderConfirmation from "../pages/orders/OrderConfirmation";
import Orders from "../pages/orders/Orders";
import NotFound from "../pages/404";

const routes = [
  {
    path: "/",
    component: <Homepage />,
  },
  {
    path: "/category/:id",
    component: <Products />,
  },
  {
    path: "/category/product/:id",
    component: <Product />,
  },
  {
    path: "/signin",
    component: <Signin />,
  },
  {
    path: "/register/business",
    component: <Business />,
  },
  {
    path: "/signup",
    component: <Individual />,
  },
  {
    path: "/passwordreset",
    component: <PasswordReset />,
  },
  {
    path: "/cart",
    component: <Cart />,
  },
  {
    path: "/checkout",
    component: <Checkout />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
  {
    path: "/faqs",
    component: <FAQs />,
  },
  {
    path: "/order/confirm",
    component: <OrderConfirmation/>,
  },
  {
    path: "*",
    component: <NotFound/>,
  },
];

export default routes;
