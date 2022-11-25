// import { useParams } from "react-router-dom";
import { useState } from "react";
import advocado from "../../assets/advocado.png";
import Button from "../../components/Button/Button";

const Products = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    count > 1 && setCount((prev) => prev - 1);
  };

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
          <div className='flex flex-col gap-2'>
            <span>Advocado</span>
            <p className='flex justify-between'>
              <span>#2500</span>
              <span>(each)</span>
            </p>
            <span className='flex items-center justify-between gap-2'>
              <button
                className='text-lg text-white bg-greenish/60 flex justify-center items-center w-8 h-8 rounded'
                onClick={() => decrement()}
              >
                -
              </button>
              <input
                type='number'
                name='quantity'
                id='quantity'
                className='border-[1px] rounded p-2 font-light w-[60%] h-8 text-center rounded'
                value={count}
                disabled
              />
              <button
                className='text-lg text-white bg-greenish flex justify-center items-center w-8 h-8 rounded'
                onClick={() => increment()}
              >
                +
              </button>
            </span>
            <Button content={"Add to Cart"} large />
          </div>
        </div>
        <div className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
          <img
            src={advocado}
            alt=''
            className='w-full object-cover object-center'
          />
          <div className='flex flex-col gap-2'>
            <span>Advocado</span>
            <p className='flex justify-between'>
              <span>#2500</span>
              <span>(each)</span>
            </p>
            <span className='flex items-center justify-between gap-2'>
              <button
                className='text-lg bg-greenish flex justify-center items-center w-8 h-8 rounded'
                onClick={() => decrement()}
              >
                -
              </button>
              <input
                type='number'
                name='quantity'
                id='quantity'
                className='border-[1px] rounded p-2 font-light w-[60%] h-8 text-center rounded'
                value={count}
                disabled
              />
              <button
                className='text-lg bg-greenish flex justify-center items-center w-8 h-8 rounded'
                onClick={() => increment()}
              >
                +
              </button>
            </span>
            <Button content={"Add to Cart"} large />
          </div>
        </div>
        <div className='px-2 py-3 border-[1px] border-greyish flex flex-col gap-3 rounded'>
          <img
            src={advocado}
            alt=''
            className='w-full object-cover object-center'
          />
          <div className='flex flex-col gap-2'>
            <span>Advocado</span>
            <p className='flex justify-between'>
              <span>#2500</span>
              <span>(each)</span>
            </p>
            <span className='flex items-center justify-between gap-2'>
              <button
                className='text-lg bg-greenish flex justify-center items-center w-8 h-8 rounded'
                onClick={() => decrement()}
              >
                -
              </button>
              <input
                type='number'
                name='quantity'
                id='quantity'
                className='border-[1px] rounded p-2 font-light w-[60%] h-8 text-center rounded'
                value={count}
                disabled
              />
              <button
                className='text-lg bg-greenish flex justify-center items-center w-8 h-8 rounded'
                onClick={() => increment()}
              >
                +
              </button>
            </span>
            <Button content={"Add to Cart"} large />
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
