import grains from "../../assets/grains.png";
import fruits from "../../assets/fruits&veggies.png";
import meat from "../../assets/meat.png";
import poultry from "../../assets/poultry&fishes.png";
import spices from "../../assets/spices.png";
import tubers from "../../assets/tubers.png";
import illustration from "../../assets/illustration.png"

const Categories = () => {
  const items = [
    {
      name: "Fruits and Veggies",
      short: "fruits",
      pic: fruits,
    },
    {
      name: "Spices",
      pic: spices,
      short: "spices",
    },
    {
      name: "Grains",
      pic: grains,
      short: "grains",
    },
    {
      name: "Meat",
      pic: meat,
      short: "meat",
    },
    {
      name: "Poultry and Fishes",
      pic: poultry,
      short: "poultry",
    },
    {
      name: "Tubers",
      pic: tubers,
      short: "tubers",
    },
  ];

  return (
    <div className='bg-[#EBF2EB] h-fit w-full flex flex-col gap-12 items-center relative pt-12 pb-24'>
      <h2 className='text-3xl z-20 text-center font-medium'>Categories</h2>
      <div className='grid z-20 w-[80vw] grid-cols-2 md:grid-cols-3 gap-4'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`hover:scale-125 transition p-8 font-light flex flex-col gap-3 items-center ${
              item.short
            }`}
          >
            <img src={item.pic} alt={item.short} />
            <span className="text-center text-sm md:text-base">{item.name}</span>
          </div>
        ))}
      </div>
      <img src={illustration} alt="" className="z-10 absolute w-full h-full object-cover object-center" />
    </div>
  );
};

export default Categories;
