import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import ProductServices from "../../services/ProductServices";
import CategorySkeleton from "../Categories/CategorySkeleton";

const NewProducts = () => {
  const Card = lazy(() => import("../ProductCard/ProductCard"));

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
        <Suspense
          fallback={
            <div className='grid z-20 w-[80vw] grid-cols-2 md:grid-cols-3 gap-4'>
              <CategorySkeleton />
              <CategorySkeleton />
              <CategorySkeleton />
              <CategorySkeleton />
              <CategorySkeleton />
              <CategorySkeleton />
            </div>
          }
        >
          {products?.length > 0 && products?.map((item) => (
            <Card key={item.product_id} item={item} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default NewProducts;
