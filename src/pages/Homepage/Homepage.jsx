import FAQs from "../../components/FAQs/FAQs";
import MainInfo from "../../components/MainInfo/MainInfo";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Testimonials from "../../components/Testimonials/Testimonials";
import NewProducts from "../../components/NewProducts/NewProducts";
import Categories from "../../components/Categories/Categories";
import Workings from "../../components/Workings/Workings";
import WhyEazzy from "../../components/WhyEazzy/WhyEazzy";
import WhoCan from "../../components/WhoCan/WhoCan";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      <MainInfo />
      <Workings/>
      <WhyEazzy />
      <WhoCan/>
      <Categories/>
      <NewProducts/>
      <Testimonials />
      <FAQs />
      <NewsLetter />
    </div>
  );
};

export default Homepage;
