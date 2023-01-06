import notFound from "../assets/PageNotFound.svg";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import SearchLayout from "../layout/searchLayout";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center gap-2 w-[85vw] md:w-[60vw] text-center pb-12'>
        <img src={notFound} alt='' />
        <p>We can’t seem to find the page you are looking for 🥺</p>
        <div className='w-[60vw] md:w-[40vw]'>
          <Button
            content={"Go Back Home"}
            large
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchLayout(NotFound);
