import About from "./About";
import Footer from "./Footer";
import Information from "./Information";
import Menu from "./Menu";
import Registry from "./Registry";
import Schedule from "./Schedule";
import Start from "./Start";
import Title from "./Title";
import Vibes from "./Vibes";

function App() {
  return (
    <div className="font-courgette">
      <Title />
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

export default App;
