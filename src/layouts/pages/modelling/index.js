import React from "react";
import { Grid } from "@mui/material";
import Iframe from "react-iframe";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function Modelling() {
  return (
    <DashboardLayout>
      <Grid container alignItems="center" className="css-aimnayemsecond">
        <Iframe
          url="https://build.visrez.com/?/share/95a60e64-b0e6-4b0b-a533-bde58963b4c1"
          width="100%"
          height="100%"
          id="myId"
          className=""
          // display="initial"
          position="relative"
        />
      </Grid>
    </DashboardLayout>
  );
}

export default Modelling;
