import { useState } from "react";
import ResetInfo from "../../components/ResetInfo/ResetInfo";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import illustration from "../../assets/illustration.png";

const PasswordReset = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);
  const backStep = () => setStep((prev) => prev - 1);

  const Reset = () =>
    step === 0 ? (
      <ResetInfo nextStep={nextStep} />
    ) : (
      <ResetPassword backStep={backStep} />
    );

  return (
    <div className='bg-greenish relative min-h-screen flex justify-center items-center py-8'>
      <img
        src={illustration}
        alt=''
        className='z-10 absolute w-full h-full object-cover object-center'
      />
      <Reset/>
    </div>
  );
};

export default PasswordReset;
