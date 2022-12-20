import React from "react";
import IconButton from "@mui/material/IconButton";
// import SinglePhotos from "./SinglePhotos";
import SinglePhotos from "./SinglePhotos";
import MinimalPhotos from "./MinimalPhotos";
import StandardPhotos from "./StandardPhotos";
import "./gallery.css";

let standarPhotos, FolderName;
let standarPhotosNew = [
  {
    type: "3rdFloor",
    url: "/images/FloorPlans/3rd-Floor.png",
    thumb: "/images/FloorPlans/3rd-Floor.png",
  },
  {
    type: "3rdFloor",
    url: "/images/FloorPlans/Azalea.png",
    thumb: "/images/FloorPlans/Azalea.png",
  },
  {
    type: "3rdFloor",
    url: "/images/FloorPlans/Azalea-1.png",
    thumb: "/images/FloorPlans/Azalea-1.png",
  },
  {
    type: "3rdFloor",
    url: "/images/FloorPlans/Azalea-2.png",
    thumb: "/images/FloorPlans/Azalea-2.png",
  },
  {
    type: "3rdFloor",
    url: "/images/FloorPlans/Magnolia-1.png",
    thumb: "/images/FloorPlans/Magnolia-1.png",
  },
  {
    type: "3rdFloor",
    url: "/images/FloorPlans/Magnolia-2.png",
    thumb: "/images/FloorPlans/Magnolia-2.png",
  },
  {
    type: "3rdFloor",
    url: "/images/FloorPlans/Magnolia-3.png",
    thumb: "/images/FloorPlans/Magnolia-3.png",
  },
  {
    type: "3rdFloor",
    url: "/images/FloorPlans/Magnolia-Ballroom.png",
    thumb: "/images/FloorPlans/Magnolia-Ballroom.png",
  },
  {
    type: "11thFloor",
    url: "/images/FloorPlans/11th-Floor.png",
    thumb: "/images/FloorPlans/11th-Floor.png",
  },
  {
    type: "11thFloor",
    url: "/images/FloorPlans/Basin.png",
    thumb: "/images/FloorPlans/Basin.png",
  },
  {
    type: "11thFloor",
    url: "/images/FloorPlans/Observatory-Eleven.png",
    thumb: "/images/FloorPlans/Observatory-Eleven.png",
  },
  {
    type: "11thFloor",
    url: "/images/FloorPlans/Riverbend-Ballroom.png",
    thumb: "/images/FloorPlans/Riverbend-Ballroom.png",
  },
  {
    type: "11thFloor",
    url: "/images/FloorPlans/Riverbend-Prefunction.png",
    thumb: "/images/FloorPlans/Riverbend-Prefunction.png",
  },
  {
    type: "11thFloor",
    url: "/images/FloorPlans/Tower.png",
    thumb: "/images/FloorPlans/Tower.png",
  },
  {
    type: "12thFloor",
    url: "/images/FloorPlans/12th-Floor.png",
    thumb: "/images/FloorPlans/12th-Floor.png",
  },
  {
    type: "12thFloor",
    url: "/images/FloorPlans/Chairman.png",
    thumb: "/images/FloorPlans/Chairman.png",
  },
  {
    type: "12thFloor",
    url: "/images/FloorPlans/Executive.png",
    thumb: "/images/FloorPlans/Executive.png",
  },
  {
    type: "12thFloor",
    url: "/images/FloorPlans/Foyer-1.png",
    thumb: "/images/FloorPlans/Foyer-1.png",
  },
  {
    type: "12thFloor",
    url: "/images/FloorPlans/Foyer-2.png",
    thumb: "/images/FloorPlans/Foyer-2.png",
  },
  {
    type: "12thFloor",
    url: "/images/FloorPlans/Grand-Ballroom.png",
    thumb: "/images/FloorPlans/Grand-Ballroom.png",
  },
  {
    type: "12thFloor",
    url: "/images/FloorPlans/Imperial.png",
    thumb: "/images/FloorPlans/Imperial.png",
  },
  {
    type: "12thFloor",
    url: "/images/FloorPlans/River-1.png",
    thumb: "/images/FloorPlans/River-1.png",
  },
  {
    type: "12thFloor",
    url: "/images/FloorPlans/River-2.png",
    thumb: "/images/FloorPlans/River-2.png",
  },
  {
    type: "12thFloor",
    url: "/images/FloorPlans/Terrace-Room.png",
    thumb: "/images/FloorPlans/Terrace-Room.png",
  },
];

let FolderNameNew = [
  {
    type: "3rdFloor",
    caption: "3rd Floor",
    thumb: "/images/FloorPlans/3rd-Floor.png",
  },
  {
    type: "11thFloor",
    caption: "11th Floor",
    thumb: "/images/FloorPlans/11th-Floor.png",
  },
  {
    type: "12thFloor",
    caption: "12th Floor",
    thumb: "/images/FloorPlans/12th-Floor.png",
  },
];

const Gallery = (props) => {
  standarPhotos = standarPhotosNew;
  FolderName = FolderNameNew;

  let defaultTab = "minimal";
  if (props.subMenu != "home") {
    defaultTab = "standard";
    localStorage.setItem("folderName", props.subMenu);
    standarPhotos = standarPhotosNew.filter((value) => {
      return props.subMenu == value.type;
    });

    FolderName = FolderNameNew.filter((value) => {
      return props.subMenu == value.type;
    });
  }

  const [tab, setTab] = React.useState(defaultTab);
  const [folderName, setfolderName] = React.useState(FolderName);
  const [standerphotos, setstanderPhotos] = React.useState(standarPhotos);

  const [minimalStyle, SetminimalStyle] = React.useState({ filter: "brightness(1)" });
  const [standardStyle, SetstandardStyle] = React.useState({ filter: "brightness(0.5)" });
  const [singleStyle, SetsingleStyle] = React.useState({ filter: "brightness(1)" });

  const [getValueIcon, setGetValueIcon] = React.useState("");

  const handleChange = (value, valueBright) => {
    SetminimalStyle({
      filter: `brightness(${valueBright[0]})`,
    });
    SetstandardStyle({
      filter: `brightness(${valueBright[1]})`,
    });
    SetsingleStyle({
      filter: `brightness(${valueBright[2]})`,
    });
    if (value == "minimal") {
      setfolderName(FolderNameNew);
    }
    setTab(value);
  };

  const getGalleryLayout = () => {
    switch (tab) {
      case "minimal":
        return <MinimalPhotos control={handleChange} photos={folderName} />;
      case "standardClick":
        let standerTypeClick = localStorage.getItem("folderNameClick") || false;
        localStorage.setItem("folderName", standerTypeClick);
        let filterDataClick = standarPhotosNew;
        if (standerTypeClick != false) {
          filterDataClick = filterDataClick.filter((value) => {
            return value.type == standerTypeClick;
          });
        }
        return <StandardPhotos control={handleChange} photos={filterDataClick} />;
      case "standard":
        let standerType = localStorage.getItem("folderName") || false;
        let filterData = standarPhotos;
        if (standerType != false) {
          filterData = standarPhotos.filter((value) => {
            return value.type == standerType;
          });
        }

        return <StandardPhotos control={handleChange} photos={filterData} />;
      case "single":
        let folderNameClick = localStorage.getItem("folderNameClick") || false;
        folderNameClick == false ? "" : localStorage.setItem("folderName", folderNameClick);

        let singleType = localStorage.getItem("folderName") || false;
        localStorage.removeItem("folderNameClick");
        let singleUrl = localStorage.getItem("url") || false;
        let isPortrait = localStorage.getItem("isPortrait") || false;
        let singleFileterData = standarPhotosNew;
        if (singleType != false) {
          singleFileterData = standarPhotosNew.filter((value) => {
            return value.type == singleType;
          });
        }

        if (singleUrl != false) {
          localStorage.removeItem("url");
          let defaultPhotoObj = { type: singleType, url: singleUrl };
          isPortrait ? (defaultPhotoObj.isPortrait = true) : "";
          return <SinglePhotos defaultPhoto={defaultPhotoObj} photos={singleFileterData} />;
        } else {
          return <SinglePhotos photos={singleFileterData} />;
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
                handleChange("standard", [1, 0.5, 1]);
              }}
            >
              <img src="/images/grid9.png" style={standardStyle} className="iconbuttonDG" />
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
              onClick={() => {
                handleChange("minimal", [0.5, 1, 1]);
              }}
            >
              <img src="/images/grid4.png" style={minimalStyle} className="iconbuttonDG" />
            </IconButton>{" "}
            <IconButton
              style={{ zIndex: "9999" }}
              onClick={() => {
                handleChange("standard", [1, 0.5, 1]);
              }}
            >
              <img src="/images/grid9.png" style={standardStyle} className="iconbuttonDG" />
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
