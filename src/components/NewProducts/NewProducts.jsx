import advocado from "../../assets/advocado.png";
import Button from "../Button/Button";

const NewProducts = () => {
  return (
    <div className='flex flex-col gap-12'>
      <h2 className='text-2xl text-center font-medium'>New Products</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        <div className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
          <img
            src={advocado}
            alt=''
            className='w-full object-cover object-center'
          />
          <div className='flex flex-col gap-1'>
            <p className='flex justify-between'>
              <span>Advocado</span>
              <span>(each)</span>
            </p>
            <span>#2500</span>
            <Button content={"Add to Cart"} />
          </div>
        </div>
        <div className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
          <img
            src={advocado}
            alt=''
            className='w-full object-cover object-center'
          />
          <div className='flex flex-col gap-1'>
            <p className='flex justify-between'>
              <span>Advocado</span>
              <span>(each)</span>
            </p>
            <span>#2500</span>
            <Button content={"Add to Cart"} />
          </div>
        </div>
        <div className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
          <img
            src={advocado}
            alt=''
            className='w-full object-cover object-center'
          />
          <div className='flex flex-col gap-1'>
            <p className='flex justify-between'>
              <span>Advocado</span>
              <span>(each)</span>
            </p>
            <span>#2500</span>
            <Button content={"Add to Cart"} />
          </div>
        </div>
        <div className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
          <img
            src={advocado}
            alt=''
            className='w-full object-cover object-center'
          />
          <div className='flex flex-col gap-1'>
            <p className='flex justify-between'>
              <span>Advocado</span>
              <span>(each)</span>
            </p>
            <span>#2500</span>
            <Button content={"Add to Cart"} />
          </div>
        </div>
        <div className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
          <img
            src={advocado}
            alt=''
            className='w-full object-cover object-center'
          />
          <div className='flex flex-col gap-1'>
            <p className='flex justify-between'>
              <span>Advocado</span>
              <span>(each)</span>
            </p>
            <span>#2500</span>
            <Button content={"Add to Cart"} />
          </div>
        </div>
        <div className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
          <img
            src={advocado}
            alt=''
            className='w-full object-cover object-center'
          />
          <div className='flex flex-col gap-1'>
            <p className='flex justify-between'>
              <span>Advocado</span>
              <span>(each)</span>
            </p>
            <span>#2500</span>
            <Button content={"Add to Cart"} />
          </div>
        </div>
        <div className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
          <img
            src={advocado}
            alt=''
            className='w-full object-cover object-center'
          />
          <div className='flex flex-col gap-1'>
            <p className='flex justify-between'>
              <span>Advocado</span>
              <span>(each)</span>
            </p>
            <span>#2500</span>
            <Button content={"Add to Cart"} />
          </div>
        </div>
        <div className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
          <img
            src={advocado}
            alt=''
            className='w-full object-cover object-center'
          />
          <div className='flex flex-col gap-1'>
            <p className='flex justify-between'>
              <span>Advocado</span>
              <span>(each)</span>
            </p>
            <span>#2500</span>
            <Button content={"Add to Cart"} />
          </div>
        </div>
        <div className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
          <img
            src={advocado}
            alt=''
            className='w-full object-cover object-center'
          />
          <div className='flex flex-col gap-1'>
            <p className='flex justify-between'>
              <span>Advocado</span>
              <span>(each)</span>
            </p>
            <span>#2500</span>
            <Button content={"Add to Cart"} />
          </div>
        </div>
        <div className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
          <img
            src={advocado}
            alt=''
            className='w-full object-cover object-center'
          />
          <div className='flex flex-col gap-1'>
            <p className='flex justify-between'>
              <span>Advocado</span>
              <span>(each)</span>
            </p>
            <span>#2500</span>
            <Button content={"Add to Cart"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
