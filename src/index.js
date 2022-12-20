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

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Div100vh from "react-div-100vh";
import App from "App";

// Material Dashboard 2 PRO React Context Provider
import { MaterialUIControllerProvider } from "context";
import { compareByFieldSpec } from "@fullcalendar/react";

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      {/* <Div100vh> */}
      <App />
      {/* </Div100vh> */}
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// document.querySelector("#hamburger").addEventListener("click", function () {
//   document.querySelector(".hideSideNavClick").firstChild.classList.toggle("app-d-none");
//   if (innerWidth <= 1236) {
//     document.querySelector(".MuiBox-root.css-aim41u").classList.add("removeLeftMargin");
//   } else {
//     document.querySelector(".MuiBox-root.css-aim41u").classList.toggle("removeLeftMargin");
//   }
// });

//Check if user first time
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  const localData = localStorage.getItem("firstTime") || false;
  const path = window.location.pathname.split("/").pop();
  if (localData == false || path == "virtualtour") {
    document.querySelector("#hamburger").click();
    localStorage.setItem("firstTime", "true");
  }
  //Close sidenav when outside click
  window.addEventListener("click", function (e) {
    if (
      document.querySelector(".hideSideNavClick").classList.contains("css-srq5h2-MuiDrawer-docked")
    ) {
      if (!document.querySelector(".hideSideNavClick").contains(e.target)) {
        if (!document.querySelector("#hamburger").contains(e.target)) {
          document.querySelector("#hamburger").click();
        }
      }
    }
  });
}

// //Close sidenav when outside click
// window.addEventListener("click", function (e) {
//   console.log("checking count");

//   // if (
//   //   document.querySelector(".hideSideNavClick").classList.contains("css-lvl4a5-MuiDrawer-docked")
//   // ) {
//     // console.log("contain");
//     if (document.querySelector(".hideSideNavClick").contains(e.target)) {
//       console.log("checking count");
//       if (!document.querySelector("#hamburger").contains(e.target)) {
//         console.log("checking count hamburger");
//         // document.querySelector("#hamburger").click();
//       }
//     // }
//   }
// });

document
  .querySelector(".custome_Scroll_save_bottom")
  .setAttribute("style", `height: ${innerHeight - 405}px !important`);

let defaultScreenSize = innerHeight;

// if (innerWidth <= 1236) {
//   document.querySelector(".hideSideNavClick").firstChild.classList.add("app-d-none");
//   document.querySelector(".MuiBox-root.css-aim41u").classList.add("removeLeftMargin");
// }

setInterval(() => {
  if (defaultScreenSize != innerHeight) {
    defaultScreenSize = innerHeight;
    document
      .querySelector(".custome_Scroll_save_bottom")
      .setAttribute("style", `height: ${innerHeight - 405}px !important`);
  }
}, 1000);


// document.querySelector(".css-aimnayemsecond").parentElement.style.height = "100vh !important";

// Fix for 100vh issue in Safari mobile
const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--appHeight", `${window.innerHeight}px`);
  if (window.innerWidth > 1200) {
    document.querySelector(".hideSideNavClick").style.display = "block";
  }
  if (document.querySelector(".sliderWrapper.responsiveHeight")) {
    document.querySelector(".sliderWrapper.responsiveHeight").style.paddingTop = marginCode();
  }
  // if (window.innerWidth > 992) {
  //   if (document.querySelector(".MuiBox-root.css-16tpajl")) {
  //     let file = document.querySelector(".MuiBox-root.css-16tpajl");
  //     if(document.querySelector(".hideSideNavClick ").classList.contains("css-srq5h2-MuiDrawer-docked")){
  //       file.setAttribute("id", "");
  //     } else {
  //       file.setAttribute("id", "somethingWentWrong");
  //     }
  //   }
  //   if (document.querySelector(".MuiBox-root.css-3ct2sb")) {
  //     let file = document.querySelector(".MuiBox-root.css-3ct2sb");
  //     if(document.querySelector(".hideSideNavClick ").classList.contains("css-srq5h2-MuiDrawer-docked")){
  //       file.setAttribute("id", "");
  //     } else {
  //       file.setAttribute("id", "somethingWentWrong");
  //     }
  //   }
  // }
  // if (document.querySelector(".MuiBox-root.css-16tpajl")) {
  //   document.querySelector(".MuiBox-root.css-16tpajl").setAttribute("id", "somethingWentWrong");
  // }
};
window.addEventListener("resize", appHeight);
appHeight();

// Fix breakpoint
// if (window.innerWidth > 992) {
//   if (document.querySelector(".MuiBox-root.css-16tpajl")) {
//     let file = document.querySelector(".MuiBox-root.css-16tpajl");
//     if (document.querySelector(".hideSideNavClick ").classList.contains("css-srq5h2-MuiDrawer-docked")) {
//       file.setAttribute("id", "");
//     } else {
//       file.setAttribute("id", "somethingWentWrong");
//     }
//   }
//   if (document.querySelector(".MuiBox-root.css-3ct2sb")) {
//     let file = document.querySelector(".MuiBox-root.css-3ct2sb");
//     if (document.querySelector(".hideSideNavClick ").classList.contains("css-srq5h2-MuiDrawer-docked")) {
//       file.setAttribute("id", "");
//     } else {
//       file.setAttribute("id", "somethingWentWrong");
//     }
//   }
// }

// Fix Slider middle
window.addEventListener("click", () => {
  if (document.querySelector(".sliderWrapper.responsiveHeight")) {
    document.querySelector(".sliderWrapper.responsiveHeight").style.paddingTop = marginCode();
  }
});

let marginCode = () => {
  let topGroupButton = parseFloat(window.getComputedStyle(document.querySelector(".iconButtonGroup"), null).getPropertyValue("height")) + 10;
  let sliderInner = innerHeight - topGroupButton;
  let sliderHeight = parseFloat(window.getComputedStyle(document.querySelector(".slideRow"), null).getPropertyValue("height"));
  // let extraSpace = ((sliderInner - sliderHeight) / 2) - 20;
  // return extraSpace;
  let cssText = `calc((((${sliderInner}px - 1rem) - ${sliderHeight}px) / 2) - 40px)`;
  return cssText
}

function fullscreenchanged(event) {
  let isOpen = localStorage.getItem("isNavBarOpen") || "false";
  if (isOpen == "true") {
    document.querySelector("button#hamburger").click();
  }
  // setTimeout(() => {
  //   if (isOpen == "true") {
  //     document.querySelector("button#hamburger").click();
  //   }
  //   document.querySelector(".hideSideNavClick").style.opacity = "block";
  //   document.querySelector(".css-16tpajl").style.marginLeft = "1rem";
  // }, 0);
}

document.addEventListener('fullscreenchange', fullscreenchanged);