import Footer from "./Footer";
import Welcome from "./Welcome";

const App: React.FC = () => {
  return (
    <div className="font-courgette">
      <div className="h-screen bg-cornsilk text-dark_moss_green">
        <Welcome />
        <Footer />
      </div>
    </div>
  );
};

export default App;
