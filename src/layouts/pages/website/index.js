import React from "react";
import Iframe from "react-iframe";
import { Grid } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function Website() {
  return (
    <DashboardLayout>
      <Grid
        container
        alignItems="center"
        className="homePageCss"
      >
        <Iframe
          url="https://www.marriott.com/en-us/hotels/msywi-the-westin-new-orleans/overview/"
          width="100%"
          height="100%"
          position="relative"
          allow="autoplay"
        />
      </Grid>
    </DashboardLayout>
  );
}
export default Website;
