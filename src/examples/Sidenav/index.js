/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation, NavLink, Navigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custome Image Component
import ImageInfo from "components/ImageInfo";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Material Dashboard 2 PRO React examples
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavList from "examples/Sidenav/SidenavList";
import SidenavItem from "examples/Sidenav/SidenavItem";

// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarDesktopMenu,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

import { TextAlignJustified } from "akar-icons";
// import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// Material Dashboard 2 PRO React context
import {
  useMaterialUIController,
  setTransparentSidenav,
  setWhiteSidenav,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [navbarType, setNavbarType] = useState();
  const [openCollapse, setOpenCollapse] = useState(false);
  const [openNestedCollapse, setOpenNestedCollapse] = useState(false);
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    transparentSidenav,
    transparentNavbar,
    fixedNavbar,
    whiteSidenav,
    openConfigurator,
    darkMode,
  } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];
  const items = pathname.split("/").slice(1);
  const itemParentName = items[1];
  const itemName = items[items.length - 1];

  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => {
    localStorage.setItem("isNavBarOpen", (document.querySelector(".hideSideNavClick").classList.contains("css-srq5h2-MuiDrawer-docked")) ? true : false);
    setMiniSidenav(dispatch, !miniSidenav);
    let sideBar = document.querySelector(".hideSideNavClick");

    if (window.innerWidth > 1200) {
      document.querySelector(".hideSideNavClick").style.display = "block";
    }

    if (window.innerWidth > 991 && window.innerWidth < 1200) {
      if (sideBar.classList.contains("css-8jmr5u-MuiDrawer-docked")) {
        sideBar.style.display = "none";
      } else {
        sideBar.style.display = "block";
      }
    }

    if (window.innerWidth > 992) {
      if (document.querySelector(".MuiBox-root.css-16tpajl")) {
        let file = document.querySelector(".MuiBox-root.css-16tpajl");
        if (sideBar.classList.contains("css-srq5h2-MuiDrawer-docked")) {
          file.setAttribute("id", "");
        } else {
          file.setAttribute("id", "somethingWentWrong");
        }
      }
      if (document.querySelector(".MuiBox-root.css-3ct2sb")) {
        let file = document.querySelector(".MuiBox-root.css-3ct2sb");
        if (sideBar.classList.contains("css-srq5h2-MuiDrawer-docked")) {
          file.setAttribute("id", "");
        } else {
          file.setAttribute("id", "somethingWentWrong");
        }
      }
    }
  };
  // const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  useEffect(() => {
    setOpenCollapse(collapseName);
    setOpenNestedCollapse(itemParentName);
  }, []);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    /**
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the nested collapse items from the routes.js
  const renderNestedCollapse = (collapse) => {
    const template = collapse.map(({ name, route, key, href }) =>
      href ? (
        <Link
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavItem name={name} nested />
        </Link>
      ) : (
        <NavLink to={route} key={key} sx={{ textDecoration: "none" }}>
          <SidenavItem name={name} active={route === pathname} nested />
        </NavLink>
      )
    );

    return template;
  };
  // Render the all the collpases from the routes.js
  const renderCollapse = (collapses) =>
    collapses.map(({ name, collapse, route, href, key }) => {
      let returnValue;

      if (collapse) {
        returnValue = (
          <SidenavItem
            key={key}
            color={color}
            name={name}
            active={key === itemParentName ? "isParent" : false}
            open={openNestedCollapse === key}
            onClick={({ currentTarget }) =>
              openNestedCollapse === key && currentTarget.classList.contains("MuiListItem-root")
                ? setOpenNestedCollapse(false)
                : setOpenNestedCollapse(key)
            }
          >
            {renderNestedCollapse(collapse)}
          </SidenavItem>
        );
      } else {
        returnValue = href ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavItem color={color} name={name} active={key === itemName} />
          </Link>
        ) : (
          <NavLink to={route} key={key} sx={{ textDecoration: "none" }}>
            <SidenavItem color={color} name={name} active={key === itemName} />
          </NavLink>
        );
      }

      //! This is the text where the collapse generate (nayem)
      return <SidenavList key={key}>{returnValue}</SidenavList>;
    });

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  let renderImageInfo = "";
  const renderRoutes = routes.map(
    ({ type, name, icon, title, collapse, noCollapse, key, href, route, isReload }) => {
      let returnValue;

      if (type === "collapse") {
        if (href) {
          returnValue = (
            <Link
              href={href}
              key={key}
              target="_blank"
              rel="noreferrer"
              sx={{ textDecoration: "none" }}
            >
              <SidenavCollapse
                name={name}
                icon={icon}
                active={key === collapseName}
                noCollapse={noCollapse}
              />
            </Link>
          );
        } else if (noCollapse && route) {
          const navOnClick = (route) => {
            setOpenCollapse(false);
            if (isReload) {
              if (document.querySelector(".homeGalleryButton")) {
                document.querySelector(".homeGalleryButton").click();
              }
            }
          };
          returnValue = (
            <NavLink onClick={() => navOnClick(route)} to={route} key={key}>
              <SidenavCollapse
                name={name}
                icon={icon}
                noCollapse={noCollapse}
                active={key === collapseName}
                onClick={() => (openCollapse === key ? false : setOpenCollapse(key))}
              >
                {collapse ? renderCollapse(collapse) : null}
              </SidenavCollapse>
            </NavLink>
          );
        } else {
          returnValue = (
            <SidenavCollapse
              key={key}
              name={name}
              icon={icon}
              active={key === collapseName}
              open={openCollapse === key}
              onClick={() => (openCollapse === key ? setOpenCollapse(false) : setOpenCollapse(key))}
            >
              {collapse ? renderCollapse(collapse) : null}
            </SidenavCollapse>
          );
        }
      } else if (type === "title") {
        returnValue = (
          <MDTypography
            key={key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </MDTypography>
        );
      } else if (type === "divider") {
        returnValue = (
          <Divider
            key={key}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
          />
        );
      } else if (type === "imgWithInfo") {
        renderImageInfo = <ImageInfo />;
        returnValue = "";
      }
      return returnValue;
    }
  );

  // Styles for the navbar icons
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = darkMode ? white.main : dark.main;
      return colorValue;
    },
  });

  //Check if user first time
  // const localData = localStorage.getItem("firstTime") || false;
  // localData == false ? handleMiniSidenav() : localStorage.setItem("firstTime", "true");
  const toggleFullScreen = () => {
    if (
      !document.fullscreenElement && // alternative standard method
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };

  return (
    <>
      {/* <div id="hamburger">
        <span>
          <TextAlignJustified strokeWidth={2} size={18} />
          <img src="/images/humberger.png" style={{ width: "18px" }} alt="This is a image" />
        </span>
      </div> */}
      <IconButton
        id="hamburger"
        sx={navbarDesktopMenu}
        onClick={handleMiniSidenav}
        size="small"
        disableRipple
      >
        <img src="/images/humberger.png" style={{ width: "18px" }} alt="This is a image" />
        {/* <Icon fontSize="medium" sx={iconsStyle}>
          {miniSidenav ? "menu_open" : "menu"}
        </Icon> */}
      </IconButton>

      <IconButton
        id="fullscreen"
        sx={navbarDesktopMenu}
        onClick={toggleFullScreen}
        size="small"
        disableRipple
      >
        <img
          src="/images/full-screen-button-1.png"
          style={{ width: "18px" }}
          alt="This is a image"
        />
        {/* <Icon fontSize="medium" sx={iconsStyle}>
          {miniSidenav ? "menu_open" : "menu"}
        </Icon> */}
      </IconButton>

      <SidenavRoot
        {...rest}
        className="hideSideNavClick"
        style={{ display: 'block' }}
        variant="permanent"
        ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
      >
        <MDBox className="galleryLayoutScroll overflowHiddenImportant">
          <MDBox pt={3} pb={1} px={4} textAlign="center">
            <MDBox
              component={NavLink}
              to="/"
              display="flex"
              alignItems="center"
              onClick={() => setOpenCollapse(false)}
            >
              {brand && (
                <MDBox nayem="First" component="img" src={brand} alt="Brand" width="100%" />
              )}
            </MDBox>
          </MDBox>
          <Divider
            style={{ marginTop: "10px", marginBottom: "7px" }}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
          />
          <List className="custome_Scroll_save_bottom">{renderRoutes} </List>
          <div className="custome_Scroll_save_bottom_anim"></div>
          <List>
            <Divider
              light={
                (!darkMode && !whiteSidenav && !transparentSidenav) ||
                (darkMode && !transparentSidenav && whiteSidenav)
              }
            />
            {renderImageInfo}{" "}
            <Divider
              light={
                (!darkMode && !whiteSidenav && !transparentSidenav) ||
                (darkMode && !transparentSidenav && whiteSidenav)
              }
            />
            <MDBox
              to="/"
              display="flex"
              alignItems="center"
              marginBottom="18px"
              justifyContent="center"
            >
              <Link href="https://one-viewer.com/" target="_blank">
                <MDBox
                  component="img"
                  src="/images/logo.png"
                  alt="Brand"
                  width="150px"
                  style={{ cursor: "pointer", marginBottom: "1rem" }}
                />
              </Link>
            </MDBox>
          </List>
        </MDBox>
      </SidenavRoot>
    </>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
