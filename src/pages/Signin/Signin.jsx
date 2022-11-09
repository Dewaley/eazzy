import illustration from "../../assets/illustration.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Signin = () => {
  return (
    <div className='bg-greenish relative min-h-screen flex justify-center items-center py-8'>
      <img
        src={illustration}
        alt=''
        className='z-10 absolute w-full h-full object-cover object-center'
      />
      <div className='w-[90vw] max-w-[500px] bg-white rounded-md flex flex-col items-center gap-4 z-20 p-8'>
        <div>
          <img src={logo} alt='' className='h-12 mb-2' />
          <p className='text-center font-medium text-lg'>Welcome back!</p>
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
          <input
            type='text'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            placeholder='Password'
          />
          <p className='text-neutral-400 mb-4 font-light text-sm sm:text-base'>
            Forgot password?{" "}
            <Link to='/resetpassword' className='text-greenish'>
              Reset here
            </Link>
          </p>
          <Button content={"Log in"} large type={"submit"} />
        </form>
        <div className='flex flex-col gap-2 mt-4 items-center font-light'>
          <p className='text-center text-neutral-400'>New to the space?</p>
          <div className='flex divide-x-[1px] divide-greenish text-greenish text-sm sm:text-base text-center'>
            <Link to="/register/business" className='pr-2'>Register as business</Link>
            <Link to="/register/individual" className='pl-2'>Register as individual</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
