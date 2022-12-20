import React from "react";
import { Grid } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import VideoGallery from "components/VideoGallery/index";

function Videogallery() {
  return (
    <DashboardLayout>
      <Grid container alignItems="center" className="homePageCss blockThat">
        <VideoGallery />
      </Grid>
    </DashboardLayout>
  );
}
export default Videogallery;
