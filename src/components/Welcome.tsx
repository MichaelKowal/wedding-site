import { useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-full flex sm:flex-row flex-col sm:justify-around justify-end sm:items-end items-center gap-4 md:px-40 sm:pb-40 pb-12 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('assets/images/home-bg.jpeg')" }}
    >
      <button
        className="bg-dark_moss_green-800 hover:bg-dark_moss_green-600 text-white font-bold w-60 md:w-40 lg:w-60 h-20 rounded text-3xl md:text-xl lg:text-3xl opacity-90"
        onClick={() => navigate("/wedding-pics")}
      >
        Pictures
      </button>
      <button
        disabled
        className="bg-dark_moss_green-900 text-white font-bold w-60 md:w-40 lg:w-60 h-20 rounded text-3xl md:text-xl lg:text-3xl opacity-75"
        onClick={() => navigate("/honeymoon")}
      >
        Honeymoon
        <br />
        <div className="text-xl">(Coming Soon)</div>
      </button>
      <button
        className="bg-dark_moss_green-800 hover:bg-dark_moss_green-600 text-white font-bold w-60 md:w-40 lg:w-60 h-20 rounded text-3xl md:text-xl lg:text-3xl opacity-90"
        onClick={() => navigate("/info")}
      >
        Info
      </button>
    </div>
  );
};

export default Welcome;
