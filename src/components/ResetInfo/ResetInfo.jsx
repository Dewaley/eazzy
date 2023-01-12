import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import AuthServices from "../../services/AuthServices";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetInfo = ({ nextStep }) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    AuthServices.forgotPassword(data).then((res) => {
      console.log(res);
      setLoading(false);
      if (res?.status === 200) {
        setMsg("Please check your mail to reset your password")
      } else {
        setErr(res?.data?.message)
      }
    });
  };

  return (
    <div className='w-[90vw] max-w-[500px] bg-white rounded-md flex flex-col items-center gap-4 z-20 p-8'>
      <div className='flex flex-col items-center'>
        <img src={logo} alt='' className='h-12 mb-2' />
        <p className='text-center font-medium text-lg'>
          Enter your email to reset your password
        </p>
        <p className='text-greenish'>{msg}</p>
        <p className='error'>{err}</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=''
        className='flex flex-col gap-4 w-full'
      >
        <input
          type='email'
          name=''
          id=''
          required
          className='border-2 rounded p-2'
          placeholder='Email Address'
          {...register("email")}
        />
        <div className='flex flex-col mt-4'>
          <Button content={"Next Step"} large loader={loading} />
          <Link to='/signin' className='text-neutral-400 text-center mt-2'>
            Back to Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetInfo;
