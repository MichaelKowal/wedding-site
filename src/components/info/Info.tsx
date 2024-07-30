import About from "./About";
import Footer from "../Footer";
import Information from "./FAQ";
import Menu from "./Menu";
import Registry from "./Registry";
import Schedule from "./Schedule";
import Start from "./Start";
import Title from "../Title";
import Vibes from "./Vibes";
import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();

  const titleOptions = [
    { name: "About", href: "About" },
    { name: "Schedule", href: "About" },
    { name: "Menu", href: "About" },
    { name: "Vibes", href: "About" },
    { name: "Registry", href: "Registry" },
    { name: "FAQ", href: "Information" },
    { name: "Home", callback: () => navigate("/") },
  ];
  return (
    <div className="font-courgette">
      <Title options={titleOptions} />
      <div className="h-screen bg-cornsilk text-dark_moss_green">
        <Start />
        <About />
        <Schedule />
        <Menu />
        <Vibes />
        <Registry />
        <Information />
        <Footer />
      </div>
    </div>
  );
}

export default Info;
