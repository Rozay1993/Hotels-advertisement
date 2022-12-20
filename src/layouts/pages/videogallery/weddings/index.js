import React from "react";
import Iframe from "react-iframe";
import { Grid } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function Weddings() {
  return (
    <DashboardLayout>
      <Grid container alignItems="center" className="homePageCss">
        <Iframe
          url="https://www.youtube.com/embed/xmAeMuV7mwg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          width="100%"
          height="100%"
          position="relative"
          allowfullscreen
        />
      </Grid>
    </DashboardLayout>
  );
}
export default Weddings;
