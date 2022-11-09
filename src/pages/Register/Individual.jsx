import illustration from "../../assets/illustration.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Individual = () => {
  return (
    <div className='bg-greenish relative min-h-screen flex justify-center items-center py-8'>
      <img
        src={illustration}
        alt=''
        className='z-10 absolute w-full h-full object-cover object-center'
      />
      <div className='w-[90vw] max-w-[500px] bg-white rounded-md flex flex-col items-center gap-4 z-20 p-8'>
        <div className="flex flex-col items-center">
          <img src={logo} alt='' className='w-[40%] mb-2' />
          <p className='text-center font-medium text-lg'>
            Create your eazzy account
          </p>
        </div>
        <form action='' className='flex flex-col gap-4 w-full'>
          <div className="flex justify-between">
            <input
              type='text'
              name=''
              id=''
              required
              className='border-2 rounded p-2 w-[48%]'
              placeholder='First Name'
            />
            <input
              type='text'
              name=''
              id=''
              required
              className='border-2 rounded p-2 w-[48%]'
              placeholder='Last Name'
            />
          </div>
          <input
            type='email'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            placeholder='Email Address'
          />
          <input
            type='tel'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            placeholder='Phone Number'
          />
          <input
            type='text'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            placeholder='Home Address'
          />
          <input
            type='text'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            placeholder='Password'
          />
          <div className='flex flex-col mt-4'>
            <Button content={"Sign up"} large type={"submit"} />
            <span className='text-neutral-400 text-center mt-2'>
              Already have an account?{" "}
              <Link to='/signin' className='text-greenish'>
                Log in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Individual;
