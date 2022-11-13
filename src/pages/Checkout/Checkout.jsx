import onions from "../../assets/onions.png";
import Button from "../../components/Button/Button";

const Checkout = () => {
  return (
    <div className='bg-[#E5E5E5] flex flex-col md:flex-row gap-6 md:gap-8 justify-center min-h-[60vh] px-3 py-8 md:py-12 md:px-8'>
      <div className='flex flex-col gap-8 w-full bg-white px-3 md:px-6 py-6 md:w-[70vw] h-fit rounded'>
        <div className='flex flex-col gap-y-2 border-b-2 pb-2'>
          <h1 className='font-medium text-neutral-400'>Dewale's cart</h1>
          <h4 className='font-medium'>Address details</h4>
        </div>
        <form action='' className='flex flex-col gap-6'>
          <div className='flex flex-col md:flex-row gap-4'>
            <input
              type='text'
              name=''
              id=''
              placeholder='First name'
              className='md:w-1/2 border-[1px] rounded p-2 font-lg'
            />
            <input
              type='text'
              name=''
              id=''
              placeholder='Last name'
              className='md:w-1/2 border-[1px] rounded p-2 font-lg'
            />
          </div>
          <div className='flex flex-col gap-6'>
            <input
              type='tel'
              name=''
              id=''
              placeholder='Phone Number'
              className='border-[1px] rounded p-2 font-lg'
            />
            <input
              type='tel'
              name=''
              id=''
              placeholder='Delivery Address'
              className='border-[1px] rounded p-2 font-lg'
            />
          </div>
          <div className='flex flex-row gap-4'>
            <input
              type='date'
              name=''
              id=''
              className='w-1/2 border-[1px] rounded p-2 font-lg'
            />
            <input
              type='time'
              name=''
              id=''
              className='w-1/2 border-[1px] rounded p-2 font-lg'
            />
          </div>
          <select
            name='states'
            id='states'
            className='w-full border-[1px] rounded p-2 font-lg'
          >
            <option value='volvo'>Ogun</option>
            <option value='saab'>Lagos</option>
            <option value='mercedes'>Oyo</option>
            <option value='audi'>Benue</option>
          </select>
        </form>
      </div>
      <div className='flex flex-col gap-4 w-full bg-white px-3 md:px-6 py-6 md:w-[30vw] h-fit rounded'>
        <div className='flex flex-col gap-y-2 border-b-2 pb-2'>
          <h1 className='font-medium text-neutral-400'>Order summary</h1>
          <h4 className='font-medium'>Your order (1 item)</h4>
        </div>
        <div className='flex flex-col gap-4 py-4 border-b-2'>
          <div className='flex items-center gap-2'>
            <img src={onions} alt='' className='w-[40%]' />
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg font-medium'>Onions</h1>
              <span className='text-greenish text-lg'>#3,000</span>
              <span>Qty: Quater bag</span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <img src={onions} alt='' className='w-[40%]' />
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg font-medium'>Onions</h1>
              <span className='text-greenish text-lg'>#3,000</span>
              <span>Qty: Quater bag</span>
            </div>
          </div>
        </div>
        <div className='pb-3 border-b-2 flex flex-col gap-3 pt-2'>
          <div className='flex justify-between'>
            <h4>Subtotal</h4>
            <span className='font-medium'>#3,000</span>
          </div>
          <div className='flex justify-between'>
            <h4>Delivery</h4>
            <span className='font-medium'>#2,000</span>
          </div>
        </div>
        <div className='pb-3 border-b-2 pt-2 mb-3'>
          <div className='flex justify-between'>
            <h4>Total</h4>
            <span className='font-medium text-greenish'>#5,000</span>
          </div>
        </div>
        <Button content={"Place order"} large />
      </div>
    </div>
  );
};

export default Checkout;
