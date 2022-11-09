import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {

  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className={`${pathname.includes("/signin") ? "hidden" : "block"} bg-greenish p-8 text-white flex flex-col items-center overflow-x-hidden`}>
      <div className='flex flex-col sm:flex-row sm:justify-between items-center w-full text-center sm:text-left gap-4'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl italic'>Eazzy</h2>
          <p>The Farmers market in your pocket.</p>
          <div className='flex gap-2 justify-center sm:justify-start'>
            <a href='https://instagram.com/tryeazzy/' target="_blank" rel="noreferrer">
              <FaInstagram className='hover:scale-125 transition' />
            </a>
            <a href='https://twitter.com/tryeazzy/' target="_blank" rel="noreferrer">
              <FaTwitter className='hover:scale-125 transition' />
            </a>
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
          <a href="tel:08169793982">08169793982</a>
          <a href="mailto:support@tryeazzy.com">support@tryeazzy.com</a>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
      <div className='w-[90%] border-t-[1px] border-t-white mt-8 text-center sm:text-left'>
        &#169; 2022 Eazzy All rights reserved
      </div>
    </div>
  );
};

export default Footer;
