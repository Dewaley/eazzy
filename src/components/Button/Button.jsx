import React from "react";
import { ImSpinner6} from "react-icons/im"

const Button = ({ content, type, big,large,loader,onClick }) => {
  return (
    <button
    onClick={onClick}
      type={type}
      className={`z-20 flex justify-center items-center gap-1 font-light hover:bg-white hover:border-greenish border-transparent border-[1px] hover:text-greenish transition w-fit bg-greenish rounded py-2 text-white ${
        big ? "px-6" : "px-3"
      } ${
        large ? "w-full" : "w-fit"
      }`}
    >
      {loader && <ImSpinner6 className="animate-spin"/>}
      {content}
    </button>
  );
};

export default Button;
