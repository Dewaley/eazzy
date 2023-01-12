import { useState } from "react";
import ResetInfo from "../../components/ResetInfo/ResetInfo";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import illustration from "../../assets/illustration.png";

const PasswordReset = () => {
  const Reset = () => <ResetInfo />;

  return (
    <div className='bg-greenish relative min-h-screen flex justify-center items-center py-8'>
      <img
        src={illustration}
        alt=''
        className='z-10 absolute w-full h-full object-cover object-center'
      />
      <Reset />
    </div>
  );
};

export default PasswordReset;
