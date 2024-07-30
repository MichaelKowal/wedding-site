import flowerTop from "../../assets/svgs/flower-frame-top.svg";
import flowerBottom from "../../assets/svgs/flower-frame-bottom.svg";

const Start: React.FC = () => {
  const getImageName = () => {
    const index = Math.floor(Math.random() * 4) + 1;
    if (index === 1) return `assets/images/splash.png`;
    return `assets/images/splash${index}.png`;
  };
  return (
    <section id="Start" className="bg-cornsilk">
      <div className="flex md:flex-row flex-col">
        <div className="bg-cornsilk h-screen md:w-1/2 w-full flex items-center sm:pt-32 pt-12 relative">
          <div className="sm:w-1/2 w-full absolute top-0 left-0">
            <img src={flowerTop} alt="border" className="sm:pt-20 p-0" />
          </div>
          <div className="sm:w-1/2 w-full absolute bottom-0 right-0">
            <img src={flowerBottom} alt="border" />
          </div>
          <div className="border-4 border-cornsilk-200 m-8 mb-20 flex flex-col justify-center items-center h-full w-full sm:px-20 px-8">
            <div className="text-center text-dark_moss_green font-alex-brush sm:text-6xl text-5xl">
              Michael and Georgia's Wedding
            </div>
            <div className="text-center font-courgette text-dark_moss_green text-4xl">
              May 19 2024
            </div>
            <div className="text-center font-courgette text-dark_moss_green text-3xl my-5">
              Princess Lake, Terrace, BC
            </div>
          </div>
        </div>
        <div
          id="splash"
          className={`md:w-1/2 w-full h-screen bg-no-repeat bg-center bg-cover`}
          style={{ backgroundImage: `url('${getImageName()}')` }}
        />
      </div>
    </section>
  );
};

export default Start;
