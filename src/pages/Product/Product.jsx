import onions from "../../assets/onions.png";
import Button from "../../components/Button/Button";
import ProductServices from "../../services/ProductServices";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [category, setCategory] = useState([]);

  useEffect(() => {
    ProductServices.fetchSingleProduct(id).then((res) => {
      console.log(res?.data[0]);

      ProductServices.fetchCategories().then((response) => {
        console.log(response);
        const findId = response.data?.find(
          (e) => e.category_id === res?.data[0]?.product_category_id
        );
        console.log("found", findId);
        setCategory(findId);
        setProduct(res?.data[0]);
      });
    });
  }, []);

  return (
    <div className='px-3 md:px-6 flex flex-col items-center gap-6 py-8'>
      <div className='w-full md:w-[90vw]'>
        <div className='capitalize'>
          Home {">"}{" "}
          <span className='text-neutral-400'>{category.category_name}</span>{" "}
          {">"} <span className='text-neutral-400'>{product.product_name}</span>
        </div>
      </div>
      <div className='md:w-[90vw] flex flex-col gap-y-8 md:flex-row items-center justify-between'>
        <img src={onions} alt='' className='w-full md:w-[40%]' />
        <div className='md:w-[55%] flex flex-col gap-4'>
          <h1 className='text-3xl font-medium'>{product.product_name}</h1>
          <p>{product.product_description}</p>
          <Button content={"Add to Cart"} big />
        </div>
      </div>
    </div>
  );
};

export default Product;
