import Cart from "../pages/Cart/Cart"
import Checkout from "../pages/Checkout/Checkout"
import Contact from "../pages/Contact/Contact"
import Homepage from "../pages/Homepage/Homepage"
import Product from "../pages/Product/Product"
import Products from "../pages/Products/Products"
import Profile from "../pages/Profile/Profile"
import Business from "../pages/Register/Business"
import Individual from "../pages/Register/Individual"
import PasswordReset from "../pages/ResetPassword/PasswordReset"
import Signin from "../pages/Signin/Signin"

const routes = [
    {
        path: "/",
        component: <Homepage/>
    },
    {
        path: "/categories/:id",
        component: <Products/>
    },
    {
        path: "/products/:id",
        component: <Product/>
    },
    {
        path: "/signin",
        component: <Signin/>
    },
    {
        path: "/register/business",
        component: <Business/>
    },
    {
        path: "/register/individual",
        component: <Individual/>
    },
    {
        path: "/passwordreset",
        component: <PasswordReset/>
    },
    {
        path: "/cart",
        component: <Cart/>
    },
    {
        path: "/checkout",
        component: <Checkout/>
    },
    {
        path: "/profile",
        component: <Profile/>
    },
    {
        path: "/contact",
        component: <Contact/>
    }
]

export default routes