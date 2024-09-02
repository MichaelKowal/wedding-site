import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import flowerTop from "../../assets/svgs/flower-frame-top.svg";
import house from "../../assets/svgs/house.svg";
import { colorPalette } from "../../utils/color";
import Footer from "../Footer";
import HMTimeline from "./HMTimeline";

const Honeymoon: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const theme = createTheme({
    palette: {
      primary: colorPalette.dark_moss_green,
      secondary: colorPalette.cornsilk,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="bg-dark_moss_green-900">
        <div className="text-center text-dark_moss_green font-alex-brush sm:text-6xl text-5xl pt-4 w-full p-16">
          Honeymoon
          <button
            className="rounded-full w-12 h-12 text-3xl p-3 bg-cornsilk-400 bg-opacity-75 hover:bg-opacity-100 text-dark_moss_green-700 absolute right-0 top-0 mt-2 mx-2 z-10"
            onClick={handleHomeClick}
          >
            <img src={house} />
          </button>
        </div>
        <div className="sm:w-1/2 w-full absolute top-0 left-0">
          <img src={flowerTop} alt="border" />
        </div>
        <HMTimeline />
      </div>
      <Footer bgColor="bg-dark_moss_green-900" />
    </ThemeProvider>
  );
};

export default Honeymoon;
