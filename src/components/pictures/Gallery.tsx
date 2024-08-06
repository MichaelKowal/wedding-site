import { useEffect, useRef, useState } from "react";

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
  const [index, setIndex] = useState<number>(1);
  const carousel = useRef<Carousel | null>();

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

  const handleMovePictureForward = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (carousel.current) {
      const nextSlide = carousel.current.state.currentSlide + 1;

      if (nextSlide < images.length) {
        setFSImage(images[nextSlide].src);
        carousel.current.goToSlide(nextSlide);
      }
    }
    e.stopPropagation();
  };

  const handleMovePictureBackward = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (carousel.current) {
      const prevSlide = carousel.current.state.currentSlide - 1;

      if (prevSlide) {
        setFSImage(images[prevSlide].src);
        carousel.current.goToSlide(prevSlide);
      }
    }
    e.stopPropagation();
  };

  return (
    <div className="bg-cornsilk h-screen overflow-hidden">
      <div className="text-center text-dark_moss_green font-alex-brush sm:text-6xl text-5xl pt-4 absolute top-0 w-full">
        Michael and Georgia's Wedding
      </div>
      <Carousel
        responsive={responsive}
        centerMode={true}
        ref={(el) => (carousel.current = el)}
        afterChange={(_prev, { currentSlide }) => {
          setIndex(currentSlide + 1);
        }}
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
          {index > 1 && (
            <button
              className="rounded-full w-20 h-20 text-3xl p-3 bg-dark_moss_green-200 hover:bg-dark_moss_green-300 bg-opacity-75 text-cornsilk-400 absolute left-0 m-5"
              onClick={handleMovePictureBackward}
            >
              {"<"}
            </button>
          )}
          <img
            src={fsImage}
            style={{ maxHeight: "90%" }}
            onClick={(event) => event.stopPropagation()}
          />
          {index < images.length && (
            <button
              className="rounded-full w-20 h-20 text-3xl p-3 bg-dark_moss_green-200 hover:bg-dark_moss_green-300 bg-opacity-75 text-cornsilk-400 absolute right-0 m-5"
              onClick={handleMovePictureForward}
            >
              {">"}
            </button>
          )}
        </div>
      )}
      <div className="w-full absolute bottom-0 text-center text-dark_moss_green-500 mb-10 text-xl">
        {index}/{images.length}
      </div>
    </div>
  );
};

export default PhotoGallery;
