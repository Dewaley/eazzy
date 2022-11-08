import onions from "../../assets/onions.png";
import Button from "../../components/Button/Button";

const Product = () => {
  return (
    <div className='px-3 md:px-6 flex flex-col items-center gap-6 py-8'>
      <div className='w-full md:w-[90vw]'>
        <div className='capitalize'>
          Home {">"} <span className='!text-[#343538]/52'>Spices</span>
        </div>
      </div>
      <div className='md:w-[90vw] flex flex-col gap-y-8 md:flex-row items-center justify-between'>
        <img src={onions} alt='' className="w-full md:w-[40%]" />
        <div className="md:w-[55%] flex flex-col gap-4">
          <h1 className='text-3xl font-medium'>Onions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            porttitor tellus feugiat nec ut. Ultrices aliquam, interdum laoreet
            posuere donec vitae non, condimentum. Non erat neque feugiat in
            egestas arcu nec. Tempor, aliquam turpis luctus ullamcorper eu nunc
            vestibulum pellentesque eget. Imperdiet sed fames venenatis, diam
            consectetur. Volutpat adipiscing fusce condimentum aliquet cursus.
            Sed neque magna lectus pretium, bibendum pellentesque. Duis
            ullamcorper.
          </p>
          <Button content={"Add to Cart"} big />
        </div>
      </div>
    </div>
  );
};

export default Product;
