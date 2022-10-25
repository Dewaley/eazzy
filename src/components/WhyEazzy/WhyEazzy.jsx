import pic1 from "../../assets/pic1.png";

const WhyEazzy = () => {
  const items = [
    {
      header: "High quality produce",
      details:
        "Get fresh and direct supply from the finest farmers/vendors, and at affordable prices.",
    },
    {
      header: "Your market runs on auto-pilot",
      details:
        "Pre-order fresh food items and other groceries on a schedule that works for you.",
    },
    {
      header: "Saves time and money",
      details:
        "Our platform enables businesses and consumers like you to procure and shop fromthe comfort of your location.",
    },
    {
      header: "Multiple & Reliable payment option",
      details:
        "We are all about the easy life, who needs cash when you can pay “eazzily” via payment links, debit cards, & a fundable in-app wallet",
    },
  ];

  return (
    <div className="bg-[#EBF2EB] w-full px-4 py-24 flex justify-center">
      <div className='flex md:w-[80vw] gap-8 items-center md:flex-row flex-col'>
        <div className='flex flex-col'>
          <h2 className='font-medium text-3xl text-center md:text-left'>Why Eazzy?</h2>
          <ul className='py-8 flex flex-col gap-4'>
            {items.map((item, index) => (
              <li className='flex items-center gap-4'>
                <div>
                  <h5 className='font-medium text-lg'>{item.header}</h5>
                  <p className='font-light text-base'>{item.details}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img src={pic1} alt='' />
      </div>
    </div>
  );
};

export default WhyEazzy;
