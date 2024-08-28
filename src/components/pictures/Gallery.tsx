import { ThemeProvider } from "@emotion/react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import createTheme from "@mui/material/styles/createTheme";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import house from "../../assets/svgs/house.svg";
import { colorPalette } from "../../utils/color";
import Footer from "../Footer";
import PopoutImage from "../PopoutImage";

const imageUrlStart =
  "https://firebasestorage.googleapis.com/v0/b/michael-georgia-wedding.appspot.com/o/Wedding%2Fimg";
const imageUrlEnd = ".jpeg?alt=media";

interface ImageDesc {
  src: string;
}

const PhotoGallery: React.FC = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [images, setImages] = useState<ImageDesc[]>([]);
  const [index, setIndex] = useState<number>(1);
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: colorPalette.dark_moss_green,
      secondary: colorPalette.cornsilk,
    },
  });

  const loadImages = () => {
    const urlArray: string[] = [];
    for (let i = 1; i <= 110; i++) {
      urlArray.push(`${imageUrlStart}${i}${imageUrlEnd}`);
    }
    const loadedImages = urlArray.map((url) => ({
      src: url,
    }));
    setImages(loadedImages);
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleHomeClick = () => {
    navigate("/");
  };

  const openFullScreen = (index: number) => {
    setFullScreen(true);
    setIndex(index);
  };

  const closeFullScreen = () => {
    setIndex(-1);
    setFullScreen(false);
  };

  const handleMovePictureForward = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextSlide = index + 1;

    if (nextSlide < images.length) {
      setIndex(nextSlide);
    }

    e.stopPropagation();
  };

  const handleMovePictureBackward = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const prevSlide = index - 1;

    if (prevSlide > -1) {
      setIndex(prevSlide);
    }

    e.stopPropagation();
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="bg-cornsilk overflow-hidden flex flex-col justify-center items-center">
        <div className="text-center text-dark_moss_green font-alex-brush sm:text-6xl text-5xl pt-4 w-full p-16">
          Michael and Georgia's Wedding
          <button
            className="rounded-full w-12 h-12 text-3xl p-3 bg-cornsilk-400 bg-opacity-75 hover:bg-opacity-100 text-dark_moss_green-700 absolute right-0 top-0 m-4 z-10"
            onClick={handleHomeClick}
          >
            <img src={house} />
          </button>
        </div>
        <ImageList
          variant="masonry"
          cols={1}
          gap={8}
          className={"m-8 overflow-x-hidden"}
        >
          {images.map((image, index) => (
            <ImageListItem
              key={image.src}
              onClick={() => openFullScreen(index)}
              className="hover:scale-105 hover:cursor-pointer hover:animate-grow animate-grow hover:border-1 md:max-w-3xl"
            >
              <img src={image.src} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
        <PopoutImage
          open={fullScreen}
          images={images}
          index={index}
          close={closeFullScreen}
          next={handleMovePictureForward}
          previous={handleMovePictureBackward}
        />
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default PhotoGallery;
