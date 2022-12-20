import React from "react";
import { Grid } from "@mui/material";
import Iframe from "react-iframe";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function SalesDeck() {
  return (
    <DashboardLayout>
      <Grid container alignItems="center" className="css-aimnayemsecond">
        <Iframe
          url="https://toramari.com/pdf/examples/iframe.html"
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

export default SalesDeck;
