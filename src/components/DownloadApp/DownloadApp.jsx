import playStore from "../../assets/playstore.svg";
import appStore from "../../assets/appstore.svg";
import phones from "../../assets/phones.png";

const DownloadApp = () => {
  return (
    <div className='bg-downloadbg w-full px-3 flex justify-center'>
      <div className='flex flex-col md:flex-row gap-8 items-center md:w-[90vw]'>
        <div className='flex flex-col gap-4 md:w-1/2 py-8'>
          <h2 className='font-medium text-3xl text-center md:text-left'>Launching the Eazzy App really soon!</h2>
          <p>
          We are excited to start this journey with you soon.
          </p>
          <div className='flex gap-4 justify-center md:justify-start w-full md:w-auto'>
            <img src={playStore} alt='' className="w-[45%] md:w-auto" />
            <img src={appStore} alt='' className="w-[45%] md:w-auto" />
          </div>
        </div>
        <img src={phones} alt='' className='md:w-1/2 py-8' />
      </div>
    </div>
  );
};

export default DownloadApp;
