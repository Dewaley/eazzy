import PlaceholderLoading from "react-placeholder-loading";
import Button from "../../components/Button/Button";

const OrderSkeleton = () => {
  return (
    <div className='border-2 rounded-md p-2 md:p-4 flex flex-col relative'>
                  <div className='flex justify-between items-center border-b-2 py-4'>
                    <span className='bg-[#FFA500] p-1 text-white/70 rounded text-xs sm:text-sm mr-1'>
                      Processing
                    </span>
                    <div className='flex flex-col gap-2 text-neutral-400 text-xs sm:text-sm'>
                      <span className='flex items-center gap-1'>
                        Order-Date:{" "}
                        <PlaceholderLoading
                          shape='rect'
                          width={50}
                          height={10}
                        />
                      </span>
                      <span className='flex gap-3 items-center'>
                        <span className='flex items-center gap-1 sm:hidden'>
                          Order-ID:{" "}
                        <PlaceholderLoading
                            shape='rect'
                            width={50}
                            height={10}
                          />
                        </span>
                        <span className='hidden sm:flex items-center gap-1'>
                          Order-ID:{" "}
                          <PlaceholderLoading
                            shape='rect'
                            width={50}
                            height={10}
                          />
                        </span>
                        <span className='text-greenish text-xs cursor-pointer'>
                          Copy
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center py-4 text-xs md:text-sm'>
                    <div className='flex items-center gap-2'>
                      <span className='w-[40%] sm:w-[60%]'>
                      </span>
                      <div className='flex flex-col gap-2'>
                        <span>
                        <PlaceholderLoading
                            shape='rect'
                            width={70}
                            height={10}
                          />
                        </span>
                        <span className="flex items-center">
                          &#x20A6;
                          <PlaceholderLoading
                            shape='rect'
                            width={50}
                            height={10}
                          />
                        </span>
                        <span>
                        <PlaceholderLoading
                            shape='rect'
                            width={60}
                            height={10}
                          />
                        </span>
                      </div>
                    </div>
                    <div className='w-full max-w-[300px]'>
                      <Button content={"Track order"} large />
                    </div>
                  </div>
                </div>
  )
}

export default OrderSkeleton