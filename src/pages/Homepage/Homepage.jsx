import FAQs from "../../components/FAQs/FAQs";
import MainInfo from "../../components/MainInfo/MainInfo";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Testimonials from "../../components/Testimonials/Testimonials";

const Homepage = () => {
  return (
    <div>
      <MainInfo />
      <Testimonials />
      <FAQs />
      <NewsLetter />
    </div>
  );
};

export default Homepage;
