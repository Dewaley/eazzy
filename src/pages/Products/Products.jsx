import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductServices from "../../services/ProductServices";
import PlaceholderLoading from "react-placeholder-loading";
import { Link } from "react-router-dom";
import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchLayout from "../../layout/searchLayout";

const Products = () => {
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
    <div>
      {products?.length > 0 ? (
        <div className='px-3 md:px-6 flex flex-col items-center gap-6 py-8'>
          <div className='w-full md:w-[90vw]'>
            <div className='capitalize flex items-center gap-1'>
              <Link to='/'>Home</Link> {">"}{" "}
              <span className='text-neutral-400 flex'>
                {category.category_name}
              </span>
            </div>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-6 md:w-[90vw]'>
            {products.map((item) => (
              <ProductCard item={item} />
            ))}
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default SearchLayout(Products);

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
