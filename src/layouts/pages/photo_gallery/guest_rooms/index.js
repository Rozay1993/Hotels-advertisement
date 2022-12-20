import React from "react";
import { Grid } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Gallery from "components/Gallery";

function PhotoGalleryGuestRooms() {
  return (
    <DashboardLayout>
      <Grid container alignItems="center" class="homePageCss">
        <Gallery />
      </Grid>
    </DashboardLayout>
  );
}
export default PhotoGalleryGuestRooms;
