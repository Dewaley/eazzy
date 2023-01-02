import illustration from "../../assets/illustration.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AuthServices from "../../services/AuthServices";

const Business = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    AuthServices.signupBusiness(data).then((res) => {
      console.log(res);
      if (res?.status === 201) {
        navigate("/signin");
      } else if (res?.status === 422) {
        setErr(res?.data?.errors?.rc_number);
        setTimeout(() => {
          setErr("");
        }, 3000);
      }

      setLoading(false);
    });
  };

  return (
    <div className='bg-greenish relative min-h-screen flex justify-center items-center py-8'>
      <img
        src={illustration}
        alt=''
        className='z-10 absolute w-full h-full object-cover object-center'
      />
      <div className='w-[90vw] max-w-[500px] bg-white rounded-md flex flex-col items-center gap-4 z-20 p-8'>
        <div className='flex flex-col items-center'>
          <img src={logo} alt='' className='h-12 mb-2' />
          <p className='text-center font-medium text-lg'>
            Create your eazzy account
          </p>
        </div>
        <p className="text-red-500 text-center">{err}</p>
        <form
          action=''
          className='flex flex-col gap-4 w-full'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type='text'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            placeholder='Business Name'
            {...register("business_name")}
          />
          <input
            type='text'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            {...register("rc_number")}
            placeholder='RC Number'
          />
          <input
            type='email'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            placeholder='Email Address'
            {...register("email")}
          />
          <input
            type='tel'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            placeholder='Phone Number'
            {...register("phone")}
          />
          <input
            type='text'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            placeholder='Business Address'
            {...register("business_address")}
          />
          <input
            type='password'
            name=''
            id=''
            required
            className='border-2 rounded p-2'
            placeholder='Password'
            {...register("password")}
          />
          <div className='flex flex-col mt-4'>
            <Button
              content={"Sign up"}
              large
              type={"submit"}
              loader={loading}
            />
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

export default Business;
