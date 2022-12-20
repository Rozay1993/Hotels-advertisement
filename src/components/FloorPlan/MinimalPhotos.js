import React from "react";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

const MinimalPhotos = (props) => {
  function handleFolder(folderName) {
    props.control("standardClick", [1, 0.5, 1]);
    localStorage.setItem("folderNameClick", folderName);
    localStorage.setItem("folderName", folderName);
  }

  function navLinkOnClick(event){
    event.preventDefault();
  }

  return (
    <Grid container>
      {props.photos?.map((item) => {
        return (
          <Grid item xs={12} sm={6} lg={4} className="globalImageGall">
            <NavLink onClick={(e) => navLinkOnClick(e)} to={"/floor-plans/" + item.type}>
              <div
                onClick={() => handleFolder(item.type)}
                className="photoGalleryImageCaptionSizeFix photogallryFolderDesign"
                style={{ width: "100%", height: "100%" }}
              >
                <div className="grid_image_size">
                  <img src={item.thumb} />
                </div>
                <h3 className="photoGalleryImageCaption">{item.caption}</h3>
              </div>
            </NavLink>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MinimalPhotos;
//test
