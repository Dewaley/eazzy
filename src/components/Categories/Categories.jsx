import illustration from "../../assets/illustration.png";
import { useEffect, useState } from "react";
import ProductServices from "../../services/ProductServices";
import { useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import CategorySkeleton from "./CategorySkeleton";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    ProductServices.fetchCategories().then((res) => {
      console.log(res);
      setCategories(res?.data);
    });
  }, []);

  const Category = lazy(() => import("./Category"));

  // const items = [
  //   {
  //     name: "Vegetables",
  //     short: "fruits",
  //     pic: fruits,
  //   },
  //   {
  //     name: "Spices",
  //     pic: spices,
  //     short: "spices",
  //   },
  //   {
  //     name: "Grains",
  //     pic: grains,
  //     short: "grains",
  //   },
  //   {
  //     name: "Meat",
  //     pic: meat,
  //     short: "meat",
  //   },
  //   {
  //     name: "Fish & Seafood",
  //     pic: poultry,
  //     short: "poultry",
  //   },
  //   {
  //     name: "Tubers",
  //     pic: tubers,
  //     short: "tubers",
  //   },
  // ];

  return (
    <div
      id='categories'
      className='bg-[#EBF2EB] h-fit w-full flex flex-col gap-12 items-center relative pt-12 pb-24'
    >
      <h2 className='text-3xl z-20 text-center font-medium'>Categories</h2>
      <div className='grid z-20 w-[80vw] grid-cols-2 md:grid-cols-3 gap-4'>
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
          {categories.map((item) => (
            <Category item={item} />
          ))}
        </Suspense>
      </div>
      <img
        src={illustration}
        alt=''
        className='z-10 absolute w-full h-full object-cover object-center'
      />
    </div>
  );
};

export default Categories;
