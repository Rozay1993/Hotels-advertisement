import React from "react";
import { Grid } from "@mui/material";
import Gallery from "components/FloorPlan";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function FloorPlans(props) {
  return (
    <DashboardLayout className="thisIsNayem">
      <Grid container alignItems="center" className="homePageCss blockThat">
        <Gallery subMenu={props.subMenu} key={"subMenu" + props.subMenu} />
      </Grid>
    </DashboardLayout>
  );
}
export default FloorPlans;
