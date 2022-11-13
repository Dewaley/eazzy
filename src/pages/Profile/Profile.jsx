import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import Button from "../../components/Button/Button";

const Profile = () => {
  const [account, setAccount] = useState(false);
  const [security, setSecurity] = useState(false);
  const [home, setHome] = useState(false);

  //   useEffect(() => {
  //     if (account || security || home) {
  //       document.body.style.overflowY = "hidden";
  //     } else {
  //       document.body.style.overflowY = "scroll";
  //     }
  //   }, [account, security, home]);

  return (
    <div className='flex flex-col gap-4 justify-center items-center py-12 px-3'>
      <h1 className='text-xl font-medium w-full md:w-[70vw]'>
        Account Settings
      </h1>
      <div className='w-full md:w-[70vw] flex flex-col gap-2 divide-y-2'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center'>
            <h1 className='text-lg font-medium'>Account Information</h1>
            <span
              onClick={() => setAccount(true)}
              className='cursor-pointer font-medium text-greenish'
            >
              Edit
            </span>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col'>
              <h1 className='font-medium'>Email Address</h1>
              <p className='text-neutral-400'>johndoe@gmail.com</p>
            </div>
            <div className='flex flex-col'>
              <h1 className='font-medium'>Full Name</h1>
              <p className='text-neutral-400'>John Doe</p>
            </div>
            <div className='flex flex-col'>
              <h1 className='font-medium'>Phone Number</h1>
              <p className='text-neutral-400'>09016883927</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-2 pt-2'>
          <div className='flex justify-between items-center'>
            <h1 className='text-lg font-medium'>Security Information</h1>
            <span
              onClick={() => setSecurity(true)}
              className='cursor-pointer font-medium text-greenish'
            >
              Edit
            </span>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <h1 className='font-medium'>Password</h1>
              <p className='text-neutral-400'>********</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-2 pt-2'>
          <div className='flex justify-between items-center'>
            <h1 className='text-lg font-medium'>Home Information</h1>
            <span
              onClick={() => setHome(true)}
              className='cursor-pointer font-medium text-greenish'
            >
              Edit
            </span>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <h1 className='font-medium'>Home Address</h1>
              <p className='text-neutral-400'>N0 7,Majekodumi Ajah Lagos</p>
            </div>
          </div>
        </div>
      </div>
      {account && (
        <form className='absolute z-50 flex flex-col p-4 bg-white top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded gap-4 w-[95vw] max-w-[400px]'>
          <div className='text-lg font-medium flex justify-between items-center'>
            <h1 className=''>Account Settings</h1>
            <GrClose
              className='cursor-pointer'
              onClick={() => setAccount(false)}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <input
              type='text'
              placeholder='Email Address'
              className='border-[1px] rounded p-2 font-lg'
            />
            <input
              type='text'
              placeholder='Full Name'
              className='border-[1px] rounded p-2 font-lg'
            />
            <input
              type='text'
              placeholder='Phone Number'
              className='border-[1px] rounded p-2 font-lg'
            />
          </div>
          <div className='flex justify-end gap-2'>
            <button
              className='z-20 flex text-greenish justify-center items-center gap-1 font-light hover:bg-greenish border-greenish hover:border-transparent border-[1px] hover:text-white transition w-fit bg-white hover:bg-greenish rounded py-2 text-white px-3'
              onClick={() => setAccount(false)}
            >
              Cancel
            </button>
            <Button
              content={"Save"}
              type={"submit"}
              onClick={() => setAccount(false)}
            />
          </div>
        </form>
      )}
      {security && (
        <form className='absolute z-50 flex flex-col p-4 bg-white top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded gap-4 w-[95vw] max-w-[400px]'>
          <div className='text-lg font-medium flex justify-between items-center'>
            <h1 className=''>Security Settings</h1>
            <GrClose
              className='cursor-pointer'
              onClick={() => setSecurity(false)}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <input
              type='text'
              placeholder='Old Password'
              className='border-[1px] rounded p-2 font-lg'
            />
            <input
              type='text'
              placeholder='New Password'
              className='border-[1px] rounded p-2 font-lg'
            />
            <input
              type='text'
              placeholder='Confirm New Password'
              className='border-[1px] rounded p-2 font-lg'
            />
          </div>
          <div className='flex justify-end gap-2'>
            <button
              className='z-20 flex text-greenish justify-center items-center gap-1 font-light hover:bg-greenish border-greenish hover:border-transparent border-[1px] hover:text-white transition w-fit bg-white hover:bg-greenish rounded py-2 text-white px-3'
              onClick={() => setSecurity(false)}
            >
              Cancel
            </button>
            <Button
              content={"Save"}
              type={"submit"}
              onClick={() => setSecurity(false)}
            />
          </div>
        </form>
      )}
      {home && (
        <form className='absolute z-50 flex flex-col p-4 bg-white top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded gap-4 w-[95vw] max-w-[400px]'>
          <div className='text-lg font-medium flex justify-between items-center'>
            <h1 className=''>Home Info Settings</h1>
            <GrClose
              className='cursor-pointer'
              onClick={() => setHome(false)}
            />
          </div>
          <div className='flex flex-col'>
            <input
              type='text'
              placeholder='Home Address'
              className='border-[1px] rounded p-2 font-lg'
            />
          </div>
          <div className='flex justify-end gap-2'>
            <button
              className='z-20 flex text-greenish justify-center items-center gap-1 font-light hover:bg-greenish border-greenish hover:border-transparent border-[1px] hover:text-white transition w-fit bg-white hover:bg-greenish rounded py-2 text-white px-3'
              onClick={() => setHome(false)}
            >
              Cancel
            </button>
            <Button
              content={"Save"}
              type={"submit"}
              onClick={() => setHome(false)}
            />
          </div>
        </form>
      )}
      {(account || security || home) && (
        <div
          className='z-40 w-full bg-neutral-400/50 h-screen fixed top-0 left-0'
          onClick={() => {
            setAccount(false);
            setSecurity(false);
            setHome(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default Profile;
