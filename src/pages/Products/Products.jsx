// import { useParams } from "react-router-dom";
import advocado from "../../assets/advocado.png";
import Button from "../../components/Button/Button";

const Products = () => {
  return (
    <div className='px-3 md:px-6 flex flex-col items-center gap-6 py-8'>
      <div className='w-full md:w-[90vw]'>
        <div className='capitalize'>
          Home {">"} <span className='text-neutral-400'>Spices</span>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:w-[90vw]'>
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

export default Products;
