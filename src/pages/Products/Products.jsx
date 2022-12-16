import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductServices from "../../services/ProductServices";
import PlaceholderLoading from "react-placeholder-loading";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProductSkeleton from "./ProductSkeleton";

const Products = () => {
  const Card = lazy(() => import("../../components/ProductCard/ProductCard"));
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    ProductServices.fetchCategoryProducts(id).then((res) => {
      console.log(res);
      setProducts(res?.data);
    });
    ProductServices.fetchCategories().then((res) => {
      console.log(res);
      const findId = res.data?.find((e) => e.category_id === id);
      console.log("found", findId);
      setCategory(findId);
    });
  }, [id]);

  return (
    <Suspense
      fallback={
        <div className='px-3 md:px-6 flex flex-col items-center gap-6 py-8'>
          <div className='w-full md:w-[90vw]'>
            <div className='capitalize flex items-center gap-1'>
              <Link to='/'>Home</Link> {">"}{" "}
              <span className='text-neutral-400 flex'>
                <PlaceholderLoading shape='rect' width={50} height={10} />
              </span>
            </div>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:w-[90vw]'>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </div>
        </div>
      }
    >
      <div className='px-3 md:px-6 flex flex-col items-center gap-6 py-8'>
        <div className='w-full md:w-[90vw]'>
          <div className='capitalize flex items-center'>
            <Link to='/'>Home</Link> {">"}{" "}
            <span className='text-neutral-400 flex'>
              {category.category_name}
            </span>
          </div>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:w-[90vw]'>
          {products.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default Products;

{
  /* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:w-[90vw]'>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </div> */
}
