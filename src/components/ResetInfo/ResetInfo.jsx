import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const ResetInfo = ({nextStep}) => {
  return (
    <div className='w-[90vw] max-w-[500px] bg-white rounded-md flex flex-col items-center gap-4 z-20 p-8'>
      <div className='flex flex-col items-center'>
        <img src={logo} alt='' className='h-12 mb-2' />
        <p className='text-center font-medium text-lg'>
          Enter yor email to reset your password
        </p>
      </div>
      <form action='' className='flex flex-col gap-4 w-full'>
        <input
          type='email'
          name=''
          id=''
          required
          className='border-2 rounded p-2'
          placeholder='Email Address'
        />
        <div className='flex flex-col mt-4'>
          <Button
            content={"Next Step"}
            large
            onClick={(e) => {
              e.preventDefault();
              nextStep()
            }}
          />
          <Link to='/signin' className='text-neutral-400 text-center mt-2'>
            Back to Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetInfo;
