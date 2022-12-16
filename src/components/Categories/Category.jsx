import { useNavigate } from "react-router-dom";

const Category = ({ item }) => {
    const navigate= useNavigate()
  return (
    <div
            onClick={() => {
              navigate(`/category/${item.category_id}`);
            }}
            key={item.category_id}
            className={`capitalize hover:scale-125 transition p-8 font-light flex flex-col gap-3 items-center ${
              item.category_name === "Vegetables"
                ? "vegetables"
                : item.category_description
            }`}
          >
            <img
              src={"https://media.tryeazzy.co/" + item.category_image}
              alt={item.name}
            />
            <span className='text-center text-sm md:text-base'>
              {item.category_name}
            </span>
          </div>
  )
}

export default Category