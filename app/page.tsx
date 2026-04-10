
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import AboutUs from "./components/home/AboutUs";
import Categories from "./components/home/Categories";
import Testimonials from "./components/home/Testimonials";
import Footer from "./components/layout/Footer";
import Appointment from "./components/home/Appointment";


export default function Home() {
  return (
     <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Categories />
      <Testimonials />
      <Appointment />
      <Footer />
     </div>
  );
}
