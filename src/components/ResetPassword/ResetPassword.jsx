import logo from "../../assets/logo.png";
import Button from "../../components/Button/Button";

const ResetPassword = ({ backStep }) => {
  return (
    <div className='w-[90vw] max-w-[500px] bg-white rounded-md flex flex-col items-center gap-4 z-20 p-8'>
      <div className='flex flex-col items-center'>
        <img src={logo} alt='' className='h-12 mb-2' />
        <p className='text-center font-medium text-lg'>
          Enter yor reset code and your new password
        </p>
      </div>
      <form action='' className='flex flex-col gap-4 w-full'>
        <input
          type='text'
          name=''
          id=''
          required
          className='border-2 rounded p-2'
          placeholder='Code'
        />
        <input
          type='password'
          name=''
          id='password'
          required
          className='border-2 rounded p-2'
          placeholder='Password'
        />
        <input
          type='password'
          name=''
          id='confirm_password'
          required
          className='border-2 rounded p-2'
          placeholder='Confirm password'
        />
        <Button
          content={"Reset Password"}
          large
          onClick={(e) => {
            e.preventDefault();
          }}
        />
        <Button
          content={"Back Step"}
          large
          onClick={(e) => {
            e.preventDefault();
            backStep();
          }}
        />
      </form>
    </div>
  );
};

export default ResetPassword;
