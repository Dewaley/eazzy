import { useSearchParams } from "react-router-dom";
import { createContext, useContext,useState } from "react";

export const SearchData = createContext({});

export const SearchDataProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedData,setSearchedData] = useState([])

  return (
    <SearchData.Provider value={[searchParams, setSearchParams,searchedData,setSearchedData]}>
      {children}
    </SearchData.Provider>
  );
};

export const UseSearchData = () => useContext(SearchData);
