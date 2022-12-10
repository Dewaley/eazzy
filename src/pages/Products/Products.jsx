import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductServices from "../../services/ProductServices";
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    ProductServices.fetchCategories().then((res) => {
      console.log(res);
      const findId = res.data?.find((e) => e.category_id === id);
      console.log("found", findId);
      setCategory(findId);
      ProductServices.fetchCategoryProducts(id).then((res) => {
        console.log(res);
        setProducts(res?.data);
      });
    });
  }, []);

  return (
    <div className='px-3 md:px-6 flex flex-col items-center gap-6 py-8'>
      <div className='w-full md:w-[90vw]'>
        <div className='capitalize'>
          Home {">"}{" "}
          <span className='text-neutral-400'>{category.category_name}</span>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:w-[90vw]'>
        {products.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
