import Homepage from "../pages/Homepage/Homepage"
import Product from "../pages/Product/Product"
import Products from "../pages/Products/Products"
import Business from "../pages/Register/Business"
import Individual from "../pages/Register/Individual"
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
    }
]

export default routes