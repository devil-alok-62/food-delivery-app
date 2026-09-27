import Home from "./_components/Home";
import Menu from "./_components/Menu/Menu";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
