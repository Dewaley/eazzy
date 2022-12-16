import PlaceholderLoading from "react-placeholder-loading";
import Button from "../../components/Button/Button";

const ProductSkeleton = () => {
  return (
    <div className='overflow-hidden px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
      <div className='h-48 overflow-hidden'>
        <PlaceholderLoading shape='rect' width={1000} height={1000} />
      </div>
      <div className='flex flex-col gap-2 overflow-hidden'>
        <PlaceholderLoading shape='rect' width={1000} height={20} />
        <p className='flex justify-between md:text-sm text-xs items-center'>
          <PlaceholderLoading shape='rect' width={1000} height={10} />
        </p>
        <span className='flex items-center justify-between gap-2'>
          <button
            className='text-lg text-white bg-greenish/60 flex justify-center items-center w-8 h-8 rounded'
          >
            -
          </button>
          <input
            type='number'
            name='quantity'
            id='quantity'
            className='border-[1px] rounded p-2 font-light w-[60%] h-8 text-center rounded'
            value={1}
            disabled
          />
          <button
            className='text-lg text-white bg-greenish flex justify-center items-center w-8 h-8 rounded'
          >
            +
          </button>
        </span>
        <Button
          content={"Add to Cart"}
          large
          font={"text-xs md:text-base"}
        />
      </div>
    </div>
  );
};

export default ProductSkeleton;
