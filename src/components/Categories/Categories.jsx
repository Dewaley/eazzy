import grains from "../../assets/grains.png";
import fruits from "../../assets/fruits&veggies.png";
import meat from "../../assets/meat.png";
import poultry from "../../assets/poultry&fishes.png";
import spices from "../../assets/spices.png";
import tubers from "../../assets/tubers.png";

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
    <div className='flex flex-col gap-12 items-center'>
      <h2 className='text-2xl text-center font-medium'>Categories</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-8 font-light flex flex-col gap-3 items-center ${
              item.short
            }`}
          >
            <img src={item.pic} alt={item.short} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
