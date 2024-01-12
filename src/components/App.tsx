import About from "./About";
import Footer from "./Footer";
import Information from "./Information";
import RSVP from "./RSVP";
import Start from "./Start";
import Title from "./Title";

function App() {
  return (
    <div className="font-courgette">
      <Title />
      <div className="h-screen bg-cornsilk text-dark_moss_green">
        <Start />
        <About />
        <Information />
        <RSVP />
        <Footer />
      </div>
    </div>
  );
}

export default App;
