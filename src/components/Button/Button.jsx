import React from "react";

const Button = ({ content, type, big }) => {
  return (
    <button
      type={type}
      className={`font-light hover:bg-white hover:border-greenish border-transparent border-[1px] hover:text-greenish transition w-fit bg-greenish rounded py-2 text-white ${
        big ? "px-6" : "px-3"
      }`}
    >
      {content}
    </button>
  );
};

export default Button;
