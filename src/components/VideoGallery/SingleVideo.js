import React from "react";
import IconButton from "@mui/material/IconButton";
import Iframe from "react-iframe";
import "./slider/sliderCss.css";

import { CircleChevronLeft, CircleChevronRight, Width } from "akar-icons";

const SinglePhotos = (props) => {
  const [currentPhoto, setCurrentPhoto] = React.useState(props.defaultPhoto ?? props.photos[0]);
  const [previousPhoto, setPreviousPhoto] = React.useState(props.photos[0] ?? false);
  const [NextPhoto, setNextPhoto] = React.useState(props.photos[2] ?? false);
  const [index, setIndex] = React.useState(
    props.photos.findIndex((item) => item.url === currentPhoto?.url)
  );

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

  let currentPhotoClass = "sliderMiddle";
  currentPhoto.hasOwnProperty("isPortrait")
    ? (currentPhotoClass = "sliderMiddle sliderMiddlePortrait")
    : "";
  console.log(currentPhoto);

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

  let iconButtonLeftComp = "";
  if (index !== 0) {
    iconButtonLeftComp = (
      <IconButton className="slideLeftButton videoGalleryButton" onClick={handlePrevious}>
        <CircleChevronLeft style={{ color: "white" }} strokeWidth={1.1} size={50} />
      </IconButton>
    );
  } else {
    iconButtonLeftComp = (
      <IconButton
        className="slideLeftButton videoGalleryButton hideTheButtonSlider"
        onClick={handlePrevious}
      >
        <CircleChevronLeft style={{ color: "white" }} strokeWidth={1.1} size={50} />
      </IconButton>
    );
  }

  let iconButtonRightComp = "";
  if (index !== props.photos.length - 1) {
    iconButtonRightComp = (
      <IconButton className="slideRightButton videoGalleryButton" onClick={handleNext}>
        <CircleChevronRight style={{ color: "white" }} strokeWidth={1.1} size={50} />
      </IconButton>
    );
  } else {
    iconButtonRightComp = (
      <IconButton
        className="slideRightButton videoGalleryButton hideTheButtonSlider"
        onClick={handleNext}
      >
        <CircleChevronRight style={{ color: "white" }} strokeWidth={1.1} size={50} />
      </IconButton>
    );
  }

  return (
    <div className="sliderWrapper responsiveHeight">
      {iconButtonLeftComp}

      <div className="slideRow responsiveHeight">
        <div className={currentPhotoClass+ " responsiveHeight"} >
          <Iframe
            onTouchStart={(e) => touchstartImg(e)}
            onTouchEnd={(e) => touchendImg(e)}
            className="currentAnimation aspect-video responsiveHeight max-height-fixed"
            url={currentPhoto?.url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
            position="relative"
            allowfullscreen
          />
        </div>
      </div>
      {iconButtonRightComp}
    </div>
  );
};

export default SinglePhotos;
