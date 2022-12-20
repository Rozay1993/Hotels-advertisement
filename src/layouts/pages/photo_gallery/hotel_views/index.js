import React from "react";
import { Grid } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Gallery from "components/Gallery";

function PhotoGalleryHotelViews() {
  return (
    <DashboardLayout>
      <Grid container alignItems="center" className="homePageCss">
        <Gallery />
      </Grid>
    </DashboardLayout>
  );
}
export default PhotoGalleryHotelViews;
