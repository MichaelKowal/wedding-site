const Start: React.FC = () => {
  return (
    <section id="Start" className={`bg-cornsilk md:mt-20`}>
      <div className="flex md:flex-row flex-col">
        <div className="bg-cornsilk flex flex-col justify-center items-center p-6 h-screen md:w-1/2 w-full">
          <div className="text-center text-dark_moss_green font-alex-brush md:text-9xl text-7xl">
            Michael and Georgia's Wedding
          </div>
          <div className="text-center font-courgette text-dark_moss_green text-5xl">
            May 19 2024
          </div>
          <div className="text-center font-courgette text-dark_moss_green text-4xl my-5">
            Princess Lake, Terrace, BC
          </div>
        </div>
        <div
          id="splash"
          className={`md:w-1/2 w-full h-screen bg-[url('images/splash3.png')] bg-no-repeat bg-center bg-cover`}
        />
      </div>
    </section>
  );
};

export default Start;
