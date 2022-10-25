import playStore from "../../assets/playstore.png";
import appStore from "../../assets/appstore.png";
import phones from "../../assets/phones.png";

const DownloadApp = () => {
  return (
    <div className='bg-downloadbg w-full px-3 flex justify-center'>
      <div className='flex flex-col md:flex-row gap-8 items-center md:w-[90vw]'>
        <div className='flex flex-col gap-4 md:w-1/2 py-8'>
          <h2 className='font-medium text-3xl text-center md:text-left'>Coming soon!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            recusandae rem porro officia magnam quidem. Vero repellendus ab
            officiis velit minus sunt adipisci natus quam!
          </p>
          <div className='flex gap-4 justify-center md:justify-start'>
            <img src={playStore} alt='' />
            <img src={appStore} alt='' />
          </div>
        </div>
        <img src={phones} alt='' className='md:w-1/2 py-8' />
      </div>
    </div>
  );
};

export default DownloadApp;
