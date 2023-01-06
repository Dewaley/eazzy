import React from "react";
import ProductSkeleton from "../Products/ProductSkeleton";
import ProductCard from "../../components/ProductCard/ProductCard";

const Searched = ({ products,search }) => {
  return (
    <div>
      {products?.length > 0 ? (
        <div className='px-3 md:px-6 flex flex-col items-center gap-6 py-8 min-h-[85vh]'>
          <div className='w-full md:w-[90vw]'>
            <h1 className='text-xl font-semibold'>
              Search results for "{search}"
            </h1>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:w-[90vw]'>
            {products.map((item) => (
              <ProductCard item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className='px-3 md:px-6 flex flex-col items-center gap-6 py-8'>
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

export default Searched;
