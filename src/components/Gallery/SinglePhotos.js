import React from "react";
import IconButton from "@mui/material/IconButton";
import "./slider/sliderCss.css";

import { CircleChevronLeft, CircleChevronRight } from "akar-icons";

const SinglePhotos = (props) => {
  const [defaultPhoto, setDefaultPhoto] = React.useState({ def: props.defaultPhoto ?? props.photos[0], type: null });
  const [index, setIndex] = React.useState(
    props.photos.findIndex((item) => item.url === defaultPhoto?.def.url)
  );

  const getItems = (defPhoto) => {
    return props.photos.map((itemInfo) => {
      let classNameCalled =
        defPhoto.def.url == itemInfo.url && defPhoto.def.type == itemInfo.type
          ? `sliderMiddle another responsiveHeight active ${defPhoto.type}`
          : "sliderMiddle another responsiveHeight";
      return (
        <div
          onTouchStart={(e) => touchstartImg(e)}
          onTouchEnd={(e) => touchendImg(e)}
          className={classNameCalled}
        >
          <img className="currentAnimation" src={itemInfo.url} />
        </div>
      );
    });
  };

  const findPreviousItem = () => {
    const ndx = props.photos.findIndex((item) => item.url === defaultPhoto?.def.url);
    if (ndx >= 0) {
      return ndx - 1 < 0 ? props.photos.length - 1 : ndx - 1;
    }
    return 0;
  };

  const findNextItem = () => {
    const ndx = props.photos.findIndex((item) => item.url === defaultPhoto?.def.url);
    if (ndx >= 0) {
      if (ndx >= props.photos.length - 1) {
        return 0;
      }
      return ndx + 1;
    }
    return 0;
  };

  const handleNext = () => {
    let nextItem = findNextItem();
    setIndex(nextItem);
    setDefaultPhoto({ def: props.photos[nextItem], type: "next" });
  };

  const handlePrevious = () => {
    let prevItem = findPreviousItem();
    setIndex(prevItem);
    setDefaultPhoto({ def: props.photos[prevItem], type: "previous" });
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
      <div className="slideRow responsiveHeight">{getItems(defaultPhoto)}</div>
      {iconButtonRightComp}
    </div>
  );
};

export default SinglePhotos;
