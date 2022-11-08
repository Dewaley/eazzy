import Homepage from "../pages/Homepage/Homepage"
import Product from "../pages/Product/Product"
import Products from "../pages/Products/Products"

const routes = [
    {
        path: "/",
        component: <Homepage/>
    },
    {
        path: "/category/:id",
        component: <Products/>
    },
    {
        path: "/products/:id",
        component: <Product/>
    }
]

export default routes