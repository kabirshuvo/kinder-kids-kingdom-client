import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ImageGallery from "../Components/ImageGallery/ImageGallery";
import useTitle from "../hooks/usTitle";
import AboutUs from "./AboutUs/AboutUs";
import Alltoys from "./AllToys/Alltoys";
import CategorisedToys from "./CategorisedToys/CategorisedToys";
import ContactPage from "./Contact Page/ContactPage";

AOS.init({
  duration: 1900,
});

const Home = () => {
  useTitle("k3 || Home");
  return (
    <>
      <div
        className="hero min-h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>

        <div className="container mx-auto">
          <div className="max-w-xl text-center md:text-left md:ms-32">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="text-amber-200">Ki</span>nder <br />
              <span className="text-amber-200">Ki</span>ds <br />
              <span className="text-amber-200">Ki</span>ngdom </h1>
            <p className="my-5 text-1xl text-success">
              From colorful characters to enchanting landscapes, Kinder Kids Kingdom is where
              dreams come alive, making education an enchanting and
              unforgettable experience for your little ones.
            </p>
            <Link to="/alltoys" className="btn btn-amber-200 my-28">
              View All Toys
            </Link>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <CategorisedToys></CategorisedToys>
      </div>

      <div data-aos="fade-up">
        <ImageGallery></ImageGallery>
      </div>
      <div data-aos="fade-up">
        <AboutUs></AboutUs>
      </div>
      <div className="py-28" data-aos="fade-up">
        <Alltoys></Alltoys>
      </div>

      <div data-aos="fade-up" className="py-28">
        <ContactPage></ContactPage>
      </div>
    </>
  );
};

export default Home;
