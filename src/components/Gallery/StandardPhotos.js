import React from "react";
import Grid from "@mui/material/Grid";

const StandardPhotos = (props) => {
  function handleFoldeFile(folderName, url, isPortrait = false) {
    props.control("single", [1, 1, 0.5]);
    localStorage.setItem("folderName", folderName);
    localStorage.setItem("url", url);
    isPortrait
      ? localStorage.setItem("isPortrait", true)
      : localStorage.removeItem("isPortrait") || false;
  }

  function handleFile(folderName, url, itemIndex) {
    props.control("single", [1, 1, 0.5]);
    localStorage.setItem("folderName", folderName);
    localStorage.setItem("url", url);
    localStorage.setItem("itemIndex", itemIndex);
  }
  return (
    <>
      <Grid style={{ position: "relative" }} container>
        {props.photos?.map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              xl={2}
              className="centerItemFlex"
              style={{ marginBottom: "32px" }}
            >
              {item.hasOwnProperty("isPortrait") ? (
                <div
                  onClick={() => handleFoldeFile(item.type, item.url, item.isPortrait)}
                  class="shadow-bottom galleryStanderPhotos phonePortraitImageSizeHandler photogallryFolderDesign standarPortraitImage"
                  style={{ backgroundImage: `url('${item.thumb}')` }}
                ></div>
              ) : (
                <div
                  onClick={() => handleFile(item.type, item.url, index)}
                  style={{ width: "100%", height: "100%" }}
                  className="shadow-bottom galleryStanderPhotos photogallryFolderDesign"
                >
                  <div className="galleryLayoutStanderImage">
                    <img src={item.thumb} className="border-8 border-white-600" />
                  </div>
                </div>
              )}
            </Grid>
          );
        })}
        <div style={{ height: "92px", width: "100%" }}></div>
      </Grid>
      <div className="shadowImagestanderPhoto"></div>
    </>
  );
};

export default StandardPhotos;
