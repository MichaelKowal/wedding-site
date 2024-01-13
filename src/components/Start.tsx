const Start: React.FC = () => {
  return (
    <section id="Start" className={`bg-cornsilk mt-20`}>
      <div className="flex sm:flex-row flex-col">
        <div className="bg-cornsilk flex flex-col justify-center items-center p-6 h-screen sm:w-1/2 w-screen">
          <div className="text-center text-dark_moss_green font-alex-brush sm:text-9xl text-7xl">
            Michael and Georgia's Wedding
          </div>
          <div className="text-center font-courgette text-dark_moss_green text-5xl">
            May 19 2024
          </div>
          <a
            href="#RSVP"
            className="bg-dark_moss_green hover:bg-dark_moss_green-700 text-cornsilk font-bold mt-10 py-2 px-4 rounded cursor-pointer text-5xl drop-shadow-3xl"
          >
            RSVP
          </a>
        </div>
        <div
          id="splash"
          className={`sm:w-1/2 w-screen h-screen bg-[url('splash.png')] bg-no-repeat bg-center bg-cover`}
        />
      </div>
    </section>
  );
};

export default Start;
