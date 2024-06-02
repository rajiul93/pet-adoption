import Review from "@/Share/CoustomerReview/Review";
import Subscribe from "@/Share/Subscribe/Subscribe";
import AboutUs from "./AboutUs/AboutUs";
import AdoptPet from "./AdoptPet/AdoptPet";
import Hero from "./Carousel/Hero";
import PetCategory from "./PetCategory/PetCategory";

const Home = () => {
  return (
    <div>
      <Hero />
      <PetCategory />
      <AdoptPet />
      <AboutUs />
      <Subscribe />
      <Review />
    </div>
  );
};

export default Home;
