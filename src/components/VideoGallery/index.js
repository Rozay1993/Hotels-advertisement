import React from "react";
import IconButton from "@mui/material/IconButton";
// import SinglePhotos from "./SinglePhotos";
import SinglePhotos from "./SingleVideo";
import MinimalPhotos from "./MinimalPhotos";

import "./gallery.css";
import "./videoGallery.css";

const FolderName = [
  {
    type: "OVERVIEW",
    caption: "OVERVIEW",
    url: "https://player.vimeo.com/video/287069028?autoplay=1",
    player_type: "vimo",
    thumb: "/images/things_to_do_vimo_thumb.jpg",
  },
  // {
  //   type: "OVERVIEW",
  //   caption: "OVERVIEW",
  //   url: "https://www.youtube.com/embed/gf29gcm_Cvw?autoplay=1",
  //   player_type: "youtube",
  //   thumb: "/images/custome_thumb.jpg",
  //   customeThumb: true,
  // },
  {
    type: "WEDDINGS",
    caption: "WEDDINGS",
    url: "https://www.youtube.com/embed/UZP9n8fFzog?autoplay=1",
    player_type: "youtube",
  },
  {
    type: "THINGS TO DO",
    caption: "THINGS TO DO",
    url: "https://www.youtube.com/embed/5vX0D9p06S0?autoplay=1",
    player_type: "youtube",
  },
];

const Gallery = () => {
  const [tab, setTab] = React.useState("minimal");
  const [minimalStyle, SetminimalStyle] = React.useState({ filter: "brightness(0.5)" });
  const [singleStyle, SetsingleStyle] = React.useState({ filter: "brightness(1)" });

  const handleChange = (value, valueBright) => {
    SetminimalStyle({
      filter: `brightness(${valueBright[0]})`,
    });
    SetsingleStyle({
      filter: `brightness(${valueBright[1]})`,
    });
    setTab(value);
  };

  const getGalleryLayout = () => {
    switch (tab) {
      case "minimal":
        return <MinimalPhotos control={handleChange} photos={FolderName} />;
      case "single":
        let singleType = localStorage.getItem("videoName") || false;
        let singleUrl = localStorage.getItem("videoUrl") || false;

        if (singleUrl != false) {
          localStorage.removeItem("url");
          let defaultPhotoObj = { type: singleType, url: singleUrl };
          return <SinglePhotos defaultPhoto={defaultPhotoObj} photos={FolderName} />;
        } else {
          return <SinglePhotos photos={FolderName} />;
        }

      default:
        break;
    }
  };

  const getValueIconname = () => {
    switch (tab) {
      case "minimal":
        return (
          <div
            className="iconButtonGroup mobileheightzero"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              opacity: "0",
              visibility: "hidden",
            }}
          >
            <IconButton
              onClick={() => {
                handleChange("minimal", [0.5, 1, 1]);
              }}
            >
              <img src="/images/grid4.png" style={minimalStyle} className="iconbuttonDG" />
            </IconButton>{" "}
            <IconButton
              style={{ zIndex: "9999" }}
              onClick={() => {
                handleChange("single", [1, 1, 0.5]);
              }}
            >
              <img style={singleStyle} src="/images/grid1.png" className="iconbuttonDG" />
            </IconButton>{" "}
          </div>
        );
      default:
        return (
          <div
            className={
              tab == "single" ? "iconButtonGroup iconButtonGroupTopSpaceHandle" : "iconButtonGroup"
            }
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton
              className="homeGalleryButton"
              onClick={() => {
                handleChange("minimal", [0.5, 1, 1]);
              }}
            >
              <img src="/images/grid4.png" style={minimalStyle} className="iconbuttonDG" />
            </IconButton>{" "}
            <IconButton
              style={{ zIndex: "9999" }}
              onClick={() => {
                handleChange("single", [1, 1, 0.5]);
              }}
            >
              <img style={singleStyle} src="/images/grid1.png" className="iconbuttonDG" />
            </IconButton>{" "}
          </div>
        );
    }
  };

  return (
    <div>
      {getValueIconname()}
      <div
        className={tab == "single" ? "" : "galleryLayoutScroll"}
        style={
          tab == "single"
            ? {
                width: "100%",
              }
            : {
                padding: "0px 51px 0px 47px",
              }
        }
      >
        {getGalleryLayout()}
      </div>
    </div>
  );
};

export default Gallery;
