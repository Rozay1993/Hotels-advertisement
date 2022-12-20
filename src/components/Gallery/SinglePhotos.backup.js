import React from "react";
import IconButton from "@mui/material/IconButton";
import "./slider/sliderCss.css";

import { CircleChevronLeft, CircleChevronRight } from "akar-icons";

const SinglePhotos = (props) => {
  const [currentPhoto, setCurrentPhoto] = React.useState(props.defaultPhoto ?? props.photos[0]);
  const [previousPhoto, setPreviousPhoto] = React.useState(props.photos[0] ?? false);
  const [NextPhoto, setNextPhoto] = React.useState(props.photos[2] ?? false);
  const [animateSlideClass, setanimateSlideClass] = React.useState("");
  const [index, setIndex] = React.useState("");

  const findNextItem = () => {
    const ndx = props.photos.findIndex((item) => item.url === currentPhoto?.url);

    if (ndx >= 0) {
      // Check if this is the last item and return the first item
      if (ndx >= props.photos.length - 1) {
        return 0;
      }
      return ndx + 1;
    }
    return 0;
  };

  const findPreviousItem = () => {
    const ndx = props.photos.findIndex((item) => item.url === currentPhoto?.url);

    if (ndx >= 0) {
      // Check if this is the last item and return the first item
      // if (ndx >= props.photos.length - 1) {
      //   return 0;
      // }
      return ndx - 1 < 0 ? props.photos.length - 1 : ndx - 1;
      // return ndx - 1;
    }
    return 0;
  };

  const handleNext = () => {
    let nextItem = findNextItem();
    setIndex(nextItem);
    setPreviousPhoto(currentPhoto);
    setCurrentPhoto(props.photos[nextItem]);
    let curAnim = document.querySelector(".currentAnimation").classList;
    curAnim.toggle("addAnimateSlide")
      ? setTimeout(() => curAnim.remove("addAnimateSlide"), 400)
      : "";
    setNextPhoto(props.photos[nextItem + 1 > props.photos.length - 1 ? 0 : nextItem + 1]);
    LoadingImage("show");
  };

  const handlePrevious = () => {
    let prvItem = findPreviousItem();
    setIndex(prvItem);
    setCurrentPhoto(props.photos[prvItem]);
    setPreviousPhoto(props.photos[prvItem - 1 < 0 ? props.photos.length - 1 : prvItem - 1]);
    let curAnim = document.querySelector(".currentAnimation").classList;
    curAnim.toggle("addAnimateSlideopo")
      ? setTimeout(() => curAnim.remove("addAnimateSlideopo"), 400)
      : "";
  };

  let currentPhotoClass = "sliderMiddle responsiveHeight";
  currentPhoto.hasOwnProperty("isPortrait")
    ? (currentPhotoClass = "sliderMiddle responsiveHeight sliderMiddlePortrait")
    : "";
  console.log(currentPhoto);

  const LoadingImage = (type) => {
    if (type == "show") {
      document.querySelector(".loadingImage").style.display = "block";
      document.querySelector(".currentAnimation").style.filter = "brightness(0.1)";
    } else {
      document.querySelector(".currentAnimation").style.filter = "brightness(1)";
      document.querySelector(".loadingImage").style.display = "none";
    }
  };

  // Check swip tablet and mobile
  let touchstartX = 0;
  let touchendX = 0;
  function checkDirection() {
    if (touchendX < touchstartX) {
      handleNext();
      return false;
    }
    if (touchendX > touchstartX) {
      handlePrevious();
      return true;
    }
  }

  const touchstartImg = (e) => {
    touchstartX = e.changedTouches[0].screenX;
  };

  const touchendImg = (e) => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
  };

  return (
    <div className="sliderWrapper responsiveHeight">
      {index !== 0 && (
        <IconButton className="slideLeftButton videoGalleryButton" onClick={handlePrevious}>
          <CircleChevronLeft style={{ color: "white" }} strokeWidth={1.1} size={50} />
        </IconButton>
      )}

      <div className="slideRow responsiveHeight">
        <div className={currentPhotoClass}>
          <div className="loadingImage">
            <img src="https://i.ibb.co/GCjFNKN/giphy.gif" alt="Loading" />
          </div>
          <img
            onTouchStart={(e) => touchstartImg(e)}
            onTouchEnd={(e) => touchendImg(e)}
            className="currentAnimation"
            onLoad={LoadingImage}
            src={currentPhoto?.url}
          />
        </div>
      </div>

      {index !== props.photos.length - 1 && (
        <IconButton className="slideRightButton videoGalleryButton" onClick={handleNext}>
          <CircleChevronRight style={{ color: "white" }} strokeWidth={1.1} size={50} />
        </IconButton>
      )}
    </div>
  );
};

export default SinglePhotos;
