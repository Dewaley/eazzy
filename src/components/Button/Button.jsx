import React from "react";

const Button = ({content,type}) => {
  return (
      <button type={type}  className='font-light w-fit bg-greenish rounded px-3 py-2 text-white'>
      {content}
    </button>
  );
};

export default Button;
