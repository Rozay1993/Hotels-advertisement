import React from "react";
import Iframe from "react-iframe";
import { Grid } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function InstagramPage() {
  return (
    <DashboardLayout>
      <Grid
        container
        alignItems="center"
        className="homePageCss"
      >
        <Iframe
          url="https://widget.tagembed.com/28210?wix"
          width="100%"
          height="100%"
          position="relative"
        />
      </Grid>
    </DashboardLayout>
  );
}

export default InstagramPage;
