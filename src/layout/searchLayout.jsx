import { UseSearchData } from "../context/SearchContext";
import { useEffect, useState } from "react";
import ProductServices from "../services/ProductServices";
import Searched from "../pages/Searched/Searched";

const SearchLayout = (Component) => {
  function NewComponent(props) {
    const [search, setSearch] = useState("aaa");
    const [searchParams, setSearchParams, searchedData, setSearchedData] =
      UseSearchData();

    useEffect(() => {
      console.log(searchParams.get("search"));
      if (typeof searchParams.get("search") === "string") {
        ProductServices.searchProduct(searchParams.get("search")).then(
          (res) => {
            console.log(res);
            if (searchedData !== res?.data) {
              setSearchedData(res?.data);
              setSearch(searchParams.get("search"));
            }
          }
        );
      }
    }, [searchParams]);
    return (
      <div>
        {!searchParams.get("search") ? (
          <Component />
        ) : (
          <div>
            {searchedData.length > 0 ? (
              <Searched products={searchedData} search={search} />
            ) : (
              <div className='flex justify-center items-center min-h-[80vh]'>
                <h1 className='text-xl font-semibold'>Oops... No results found</h1>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
  return NewComponent;
};

export default SearchLayout;
