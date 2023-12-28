const Start: React.FC = () => {
  return (
    <section
      id="Start"
      className={`w-screen h-screen bg-[url('assets/splash.png')] bg-no-repeat bg-center bg-cover flex justify-center align-center`}
    >
      <div className="container flex-col justify-center align-center">
        <div className="text-center font-ms-madi text-9xl">
          Jump in with us!
        </div>
      </div>
    </section>
  );
};

export default Start;
