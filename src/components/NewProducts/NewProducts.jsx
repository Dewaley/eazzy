import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import ProductServices from "../../services/ProductServices";

const NewProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductServices.fetchAllProducts().then((res) => {
      console.log(res.data);
      setProducts(res?.data);
    });
  }, []);

  return (
    <div className='px-3 md:px-6 flex flex-col items-center gap-12 py-8'>
      <h2 className='text-3xl text-center font-medium'>New Products</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:w-[90vw]'>
        {products.map((item) => (
          <ProductCard key={item.product_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
