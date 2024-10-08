import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import { Theme } from "@mui/material/styles/createTheme";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { HMItem } from "../../utils/HMItem";
import { ImageDesc } from "../../utils/ImageDesc";
import PopoutImage from "../PopoutImage";
import { colorPalette } from "../../utils/color";

const imageUrlStart =
  "https://objectstorage.us-sanjose-1.oraclecloud.com/n/axsfiyk4qrrj/b/wedding/o/honeymoon%2F";

interface HMCardProps {
  item: HMItem;
}

const useStyles = makeStyles((_theme: Theme) => ({
  paper: {
    padding: "10px 16px 6px",
    backgroundColor: colorPalette.cornsilk[700],
  },
  content: {
    padding: "6px",
    maxHeight: "100vh",
    overflowY: "auto",
  },
  showMoreLess: {
    color: "steelblue",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      color: "blue",
    },
  },
}));

const HMCard: React.FC<HMCardProps> = (props) => {
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const [images, setImages] = useState<ImageDesc[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);
  const { width } = useWindowDimensions();
  const classes = useStyles();

  const loadImages = () => {
    const urlArray: string[] = [];
    for (let i = 1; i <= (props.item.imageCount ?? 0); i++) {
      urlArray.push(
        `${imageUrlStart}${props.item.imagePrefix}%2F${props.item.imagePrefix}%20-%20${i}.jpeg`
      );
    }
    const loadedImages = urlArray.map((url) => ({
      src: url,
    }));
    setImages(loadedImages);
  };

  useEffect(() => {
    loadImages();
  }, []);

  const getCols = () => {
    // Large screens
    if (width > 640) {
      return 3;
    }

    // Small screens
    return 1;
  };

  const handleOpenImage = (index: number) => {
    setFullScreen(true);
    setIndex(index);
  };

  const handleCloseImage = () => {
    setIndex(-1);
    setFullScreen(false);
  };

  const handleMovePictureBackward = () => {
    if (index >= 1) {
      setIndex(index - 1);
    }
  };

  const handleMovePictureForward = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h3" id="title" className="text-lg">
          {props.item.name}
        </Typography>
        <Typography variant="h5" id="date" className="pl-2">
          {props.item.subtitle}
        </Typography>
        <Typography variant="h6" id="date" className="pl-2">
          {props.item.dates}
        </Typography>
        <Box className={classes.content}>
          <div
            id="container"
            className="overflow-y-auto px-4 sm:px-8 pt-2 pb-4 h-full"
          >
            {props.item.description?.map((item, index) => {
              if (!showMore && index > 0) {
                return null;
              }
              return (
                <div
                  className={`py-1`}
                  style={item.additionalStyles}
                  key={index}
                >
                  {item.text}
                </div>
              );
            })}
            <div
              className="cursor-pointer text-cornflowerBlue hover:underline w-28"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
            </div>
          </div>
          <ImageList variant="masonry" cols={getCols()} gap={8}>
            {images.map((image, index) => (
              <ImageListItem
                key={image.src}
                onClick={() => handleOpenImage(index)}
              >
                <img src={image.src} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Paper>
      <PopoutImage
        open={fullScreen}
        images={images}
        index={index}
        close={handleCloseImage}
        next={handleMovePictureForward}
        previous={handleMovePictureBackward}
      />
    </>
  );
};

export default HMCard;
