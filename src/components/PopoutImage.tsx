import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useEffect, useState } from "react";
import { ImageDesc } from "../utils/ImageDesc";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { colorPalette } from "../utils/color";

const useStyles = makeStyles(() => ({
  roundedButton: {
    borderRadius: "50%",
    height: "4rem",
    width: "4rem",
  },
  paper: {
    background: `${colorPalette.dark_moss_green[800]} !important`,
    boxShadow: "none",
  },
  image: {
    maxHeight: "calc(100% - 12rem)",
    margin: "auto",
    boxShadow:
      "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);",
  },
}));

interface PopoutImageProps {
  open: boolean;
  images: ImageDesc[];
  index: number;
  next: (e: React.MouseEvent<HTMLButtonElement>) => void;
  previous: (e: React.MouseEvent<HTMLButtonElement>) => void;
  close: () => void;
}

const PopoutImage: React.FC<PopoutImageProps> = (props) => {
  const [fsImage, setFSImage] = useState<string>("");
  const classes = useStyles();

  const handleCloseFullScreen = () => {
    setFSImage("");
    props.close();
  };

  useEffect(() => {
    if (props.images?.[props.index]) {
      setFSImage(props.images[props.index].src);
    }
  }, [props.index]);

  const handleMovePictureForward = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.next(e);
  };

  const handleMovePictureBackward = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    props.previous(e);
  };

  return (
    <Dialog
      open={props.open}
      fullScreen={true}
      classes={{ paper: classes.paper }}
    >
      <Box className="flex flex-row-reverse justify-between pt-4 px-4">
        <Button
          className={classes.roundedButton}
          onClick={handleCloseFullScreen}
          color="primary"
          variant="contained"
        >
          x
        </Button>
      </Box>
      <img
        className={classes.image}
        src={fsImage}
        onClick={(event) => event.stopPropagation()}
      />

      <Box className="flex flex-row justify-between pb-4 px-4 items-center">
        <Button
          className={classes.roundedButton}
          onClick={handleMovePictureBackward}
          color="primary"
          variant="contained"
          disabled={props.index <= 0}
        >
          {"<"}
        </Button>
        <Typography>
          {props.index + 1}/{props.images.length}
        </Typography>
        <Button
          className={classes.roundedButton}
          color="primary"
          variant="contained"
          onClick={handleMovePictureForward}
          disabled={props.index >= props.images.length}
        >
          {">"}
        </Button>
      </Box>
    </Dialog>
  );
};

export default PopoutImage;
