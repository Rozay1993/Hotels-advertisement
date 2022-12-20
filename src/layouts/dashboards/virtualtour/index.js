import React from "react";
import Iframe from "react-iframe";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Grid } from "@mui/material";
import { navbarDesktopMenu } from "examples/Navbars/DashboardNavbar/styles";

function VirtualTour() {
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  return (
    <DashboardLayout>
      <Grid container alignItems="center" className="css-aimnayemsecond">
        <Iframe
          url="https://www.panowalks.com/embed/NyTKtEwqKIEz00OlNoNmzfud36OQ/"
          width="100%"
          height="100%"
          id="myId"
          // className=""
          
          // display="initial"
          position="relative"
        />
      </Grid>
    </DashboardLayout>
  );
}
export default VirtualTour;
