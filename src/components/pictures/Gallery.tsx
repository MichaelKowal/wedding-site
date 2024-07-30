import { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const imageUrlStart =
  "https://firebasestorage.googleapis.com/v0/b/michael-georgia-wedding.appspot.com/o/Wedding%2Fimg";
const imageUrlEnd = ".jpeg?alt=media";

interface ImageDesc {
  src: string;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PhotoGallery: React.FC = () => {
  const [images, setImages] = useState<ImageDesc[]>([]);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [fsImage, setFSImage] = useState<string>("");

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

  const openFullScreen = (image: ImageDesc) => {
    setFullScreen(true);
    setFSImage(image.src);
  };

  const handleCloseFullscreen = () => {
    setFullScreen(false);
    setFSImage("");
  };

  return (
    <div className="bg-cornsilk h-screen">
      <div className="text-center text-dark_moss_green font-alex-brush sm:text-6xl text-5xl pt-4 absolute top-0 w-full">
        Michael and Georgia's Wedding
      </div>
      <Carousel
        responsive={responsive}
        centerMode={true}
        containerClass="h-full"
      >
        {images.map((image) => (
          <div
            className="sm:px-10 px-2 h-4/5 flex flex-col justify-center items-center"
            onClick={() => openFullScreen(image)}
          >
            <img src={image.src} style={{ maxHeight: "75%" }} />
          </div>
        ))}
      </Carousel>
      {fullScreen && (
        <div
          className="h-full w-full absolute top-0 bg-black/75 sm:p-10 p-0 flex justify-center items-center"
          style={{ zIndex: 1200 }}
          onClick={handleCloseFullscreen}
        >
          <img
            src={fsImage}
            style={{ maxHeight: "90%" }}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
