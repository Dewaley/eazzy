import mainInfoPic from "../../assets/mainInfoPic.png";
import Button from "../Button/Button";

const MainInfo = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-8 justify-between'>
      <div className='flex flex-col gap-8 sm:w-[40%]'>
        <h1 className='text-4xl font-medium'>
          The Smarter way to buy food items & groceries.
        </h1>
        <p>
          Eazzy is a digital marketplace that enables individuals and businesses
          to shop & procure fresh food items instantly and on a schedule.
        </p>
        <Button content={'Shop Now'} />
      </div>
      <img src={mainInfoPic} alt='' className="w-full sm:w-auto sm:h-[350px] md:h-[500px]" />
    </div>
  );
};

export default MainInfo;
