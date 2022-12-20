import React from "react";
import Grid from "@mui/material/Grid";

const MinimalPhotos = (props) => {
  function handleFoldeFile(folderName, url) {
    props.control("single", [1, 0.5]);
    localStorage.setItem("videoName", folderName);
    localStorage.setItem("videoUrl", url);
  }

  const Thumbnail_getter = (src, player_type, item) => {
    if (player_type == "vimo") {
      return item.thumb;
    } else {
      if (item.customeThumb) {
        return item.thumb;
      } else {
        let youtube_video_id = src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
        return `//img.youtube.com/vi/${youtube_video_id}/maxresdefault.jpg`;
      }
    }
  };
  return (
    <Grid container>
      {props.photos?.map((item) => {
        return (
          <Grid item xs={12} sm={6} xl={6} xxl={4} lg={6} className="globalImageGall">
            <div
              onClick={() => handleFoldeFile(item.type, item.url)}
              className="photoGalleryImageCaptionSizeFix photogallryFolderDesign"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="grid_image_size make_minimum_thumb">
                <img src={Thumbnail_getter(item.url, item.player_type, item)} />
              </div>
              <h3 className="photoGalleryImageCaption">{item.caption}</h3>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MinimalPhotos;
//test
