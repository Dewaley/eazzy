import FAQs from "../../components/FAQs/FAQs";
import MainInfo from "../../components/MainInfo/MainInfo";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
// import Testimonials from "../../components/Testimonials/Testimonials";
import NewProducts from "../../components/NewProducts/NewProducts";
import Categories from "../../components/Categories/Categories";
import Workings from "../../components/Workings/Workings";
import WhyEazzy from "../../components/WhyEazzy/WhyEazzy";
import WhoCan from "../../components/WhoCan/WhoCan";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import { UseSearchData } from "../../context/SearchContext";
import { useEffect, useState } from "react";
import ProductServices from "../../services/ProductServices";
import ProductSkeleton from "../Products/ProductSkeleton";

const Homepage = () => {
  const [searchParams, setSearchParams, searchedData, setSearchedData] =
    UseSearchData();

  useEffect(() => {
    console.log(searchParams.get("search"));
    if (typeof searchParams.get("search") === "string") {
      ProductServices.searchProduct(searchParams.get("search")).then((res) => {
        console.log(res);
        if (searchedData !== res?.data) {
          setSearchedData(res?.data);
        }
      });
    }
  }, [searchParams]);

  return (
    <div>
      {!searchParams.get("search") ? (
        <div className='flex flex-col items-center gap-20'>
          <MainInfo />
          <Workings />
          <WhyEazzy />
          <WhoCan />
          <Categories />
          <NewProducts />
          {/* <Testimonials /> */}
          <FAQs />
          <div className='w-full'>
            <DownloadApp />
            <NewsLetter />
          </div>
          {/* <div className='px-3 md:px-6 flex flex-col items-center gap-6 py-8'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:w-[90vw]'>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </div>
          </div> */}
        </div>
      ) : (
        <div>
          {searchedData.length > 0
            ? "I got something"
            : "Nothing dey here baba"}
        </div>
      )}
    </div>
  );
};

export default Homepage;
