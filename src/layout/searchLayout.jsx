import { UseSearchData } from "../context/SearchContext";
import { useEffect, useState } from "react";
import ProductServices from "../services/ProductServices";


const SearchLayout = (Component) => {
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
        <Component />
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

export default SearchLayout;
