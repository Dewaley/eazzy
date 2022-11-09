import React from "react";

const Button = ({ content, type, big,large }) => {
  return (
    <button
      type={type}
      className={`z-20 font-light hover:bg-white hover:border-greenish border-transparent border-[1px] hover:text-greenish transition w-fit bg-greenish rounded py-2 text-white ${
        big ? "px-6" : "px-3"
      } ${
        large ? "w-full" : "w-fit"
      }`}
    >
      {content}
    </button>
  );
};

export default Button;
