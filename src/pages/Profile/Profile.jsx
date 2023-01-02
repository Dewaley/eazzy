import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import Button from "../../components/Button/Button";
import AuthServices from "../../services/AuthServices";
import PlaceholderLoading from "react-placeholder-loading";

const Profile = () => {
  const [user, setUser] = useState({});
  const [updated, setUpdated] = useState({});
  const [account, setAccount] = useState(false);
  const [security, setSecurity] = useState(false);
  const [home, setHome] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    AuthServices.updateUser(updated)
      .then((res) => {
        console.log(res?.data);
      })
      .then(() => {
        AuthServices.fetchUser()
          .then((res) => {
            console.log(res?.data);
            setUser(res?.data);
            setUpdated({
              first_name: res?.data?.first_name,
              last_name: res?.data?.last_name,
              email: res?.data?.email,
              phone: res?.data?.phone,
              home_address: res?.data?.home_address,
            });
          })
          .then(() => {
            setLoading(false);
          })
          .then(() => {
            setAccount(false);
            setHome(false);
          });
      });
  };

  //   useEffect(() => {
  //     if (account || security || home) {
  //       document.body.style.overflowY = "hidden";
  //     } else {
  //       document.body.style.overflowY = "scroll";
  //     }
  //   }, [account, security, home]);

  useEffect(() => {
    AuthServices.fetchUser().then((res) => {
      console.log(res?.data);
      setUser(res?.data);
      setUpdated({
        first_name: res?.data?.first_name,
        last_name: res?.data?.last_name,
        email: res?.data?.email,
        phone: res?.data?.phone,
        home_address: res?.data?.home_address,
      });
    });
  }, []);

  return (
    <div>
      {user?.id ? (
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
                  <p className='text-neutral-400'>{user?.email}</p>
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-medium'>Full Name</h1>
                  <p className='text-neutral-400'>
                    {user?.first_name + " " + user?.last_name}
                  </p>
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-medium'>Phone Number</h1>
                  <p className='text-neutral-400'>{user?.phone}</p>
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
                <div className='flex justify-between gap-8'>
                  <h1 className='font-medium'>Home Address</h1>
                  <p className='text-neutral-400 break-all'>
                    {user?.home_address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {account && (
            <form
              className='absolute z-50 flex flex-col p-4 bg-white top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded gap-4 w-[95vw] max-w-[400px]'
              id='accontForm'
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
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
                  value={updated.email}
                  required
                  placeholder='Email Address'
                  className='border-[1px] rounded p-2 font-lg'
                  onChange={(e) => {
                    setUpdated({
                      ...updated,
                      email: e.target.value,
                    });
                  }}
                />
                <input
                  type='tel'
                  placeholder='Phone Number'
                  required
                  className='border-[1px] rounded p-2 font-lg'
                  value={updated.phone}
                  pattern='[0-9]{11,13}'
                  onChange={(e) => {
                    setUpdated({
                      ...updated,
                      phone: e.target.value,
                    });
                  }}
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
                  loader={loading}
                  // onClick={() => {
                  //   handleSubmit();
                  // }}
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
            <form
              className='absolute z-50 flex flex-col p-4 bg-white top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded gap-4 w-[95vw] max-w-[400px]'
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
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
                  value={updated?.home_address}
                  onChange={(e) => {
                    setUpdated({
                      ...updated,
                      home_address: e.target.value,
                    });
                  }}
                />
              </div>
              <div className='flex justify-end gap-2'>
                <button
                  className='z-20 flex text-greenish justify-center items-center gap-1 font-light hover:bg-greenish border-greenish hover:border-transparent border-[1px] hover:text-white transition w-fit bg-white hover:bg-greenish rounded py-2 text-white px-3'
                  onClick={() => setHome(false)}
                >
                  Cancel
                </button>
                <Button content={"Save"} type={"submit"} loader={loading} />
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
      ) : (
        <div className='flex flex-col gap-4 justify-center items-center py-12 px-3'>
          <h1 className='text-xl font-medium w-full md:w-[70vw]'>
            Account Settings
          </h1>
          <div className='w-full md:w-[70vw] flex flex-col gap-2 divide-y-2'>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between items-center'>
                <h1 className='text-lg font-medium'>Account Information</h1>
                <span className='cursor-pointer font-medium text-greenish'>
                  Edit
                </span>
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex flex-col'>
                  <h1 className='font-medium'>Email Address</h1>
                  <p className='text-neutral-400 w-40 overflow-hidden'>
                    <PlaceholderLoading shape='rect' width={1000} height={10} />
                  </p>
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-medium'>Full Name</h1>
                  <p className='text-neutral-400'>
                    <p className='text-neutral-400 w-40 overflow-hidden'>
                      <PlaceholderLoading
                        shape='rect'
                        width={1000}
                        height={10}
                      />
                    </p>
                  </p>
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-medium'>Phone Number</h1>
                  <p className='text-neutral-400 w-40 overflow-hidden'>
                    <PlaceholderLoading shape='rect' width={1000} height={10} />
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-2 pt-2'>
              <div className='flex justify-between items-center'>
                <h1 className='text-lg font-medium'>Security Information</h1>
                <span className='cursor-pointer font-medium text-greenish'>
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
                <span className='cursor-pointer font-medium text-greenish'>
                  Edit
                </span>
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-between gap-8'>
                  <h1 className='font-medium'>Home Address</h1>
                  <p className='text-neutral-400 w-40 overflow-hidden'>
                    <PlaceholderLoading shape='rect' width={1000} height={10} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
