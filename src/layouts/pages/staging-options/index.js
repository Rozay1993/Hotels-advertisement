import React from "react";
import { Grid } from "@mui/material";
import Iframe from "react-iframe";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function StagingOptions() {
  return (
    <DashboardLayout>
      <Grid container alignItems="center" className="css-aimnayemsecond">
        <Iframe
          url="https://vr.visrez.com/the-boca-raton/grand-ballroom/#bG9jYXRpb24xX19fQ2xhc3Nyb29tX19fY2FwYWNpdHkxX19fYW1iaWVudDE="
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

export default StagingOptions;
