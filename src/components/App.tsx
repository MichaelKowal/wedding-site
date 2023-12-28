import About from "./About";
import Start from "./Start";
import Title from "./Title";

function App() {
  return (
    <>
      <Title />
      <div className="h-screen bg-cornsilk ">
        <Start />
        <About />
        <About />
        <About />
      </div>
    </>
  );
}

export default App;
