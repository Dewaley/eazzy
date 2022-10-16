import FAQs from "../../components/FAQs/FAQs";
import MainInfo from "../../components/MainInfo/MainInfo";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Testimonials from "../../components/Testimonials/Testimonials";
import NewProducts from "../../components/NewProducts/NewProducts";
import Categories from "../../components/Categories/Categories";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-20">
      <MainInfo />
      <Categories/>
      <NewProducts/>
      <Testimonials />
      <FAQs />
      <NewsLetter />
    </div>
  );
};

export default Homepage;
