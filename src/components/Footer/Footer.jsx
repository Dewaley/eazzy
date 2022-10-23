import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-greenish p-8 text-white flex flex-col items-center'>
      <div className='flex flex-col sm:flex-row sm:justify-between items-center w-full text-center sm:text-left gap-4'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl italic'>Eazzy</h2>
          <p>Putting your grocery runs on auto-pilot</p>
          <div className='flex gap-2 justify-center sm:justify-start'>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h4 className='text-xl'>Company</h4>
          <p>About Us</p>
          <p>Career</p>
          <p>FAQs</p>
        </div>
        <div className='flex flex-col gap-3'>
          <h4 className='text-xl'>Contact</h4>
          <p>(+24) 812345654</p>
          <p>Tryeazzy@gmail.com</p>
          <p>Lagos Nigeria</p>
        </div>
      </div>
      <div className='w-[90%] border-t-[1px] border-t-white mt-8 text-center sm:text-left'>
        &#169; 2022 Eazzy All rights reserved
      </div>
    </div>
  );
};

export default Footer;
