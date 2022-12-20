import React from "react";
import { Grid } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Gallery from "components/Gallery";

function PhotoGalleryEventAreas() {
  return (
    <DashboardLayout>
      <Grid container alignItems="center" style={{ display: "block" }} className="homePageCss">
        <Gallery />
      </Grid>
    </DashboardLayout>
  );
}
export default PhotoGalleryEventAreas;
