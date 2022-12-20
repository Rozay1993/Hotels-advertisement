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

/** 
  All of the routes for the Material Dashboard 2 PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 PRO React layouts
import VirtualTour from "layouts/dashboards/virtualtour";
import InstagramPage from "layouts/pages/instagram";
import MapDirections from "layouts/pages/map-directions";
import StagingOptions from "layouts/pages/staging-options";
import SalesDeck from "layouts/pages/sales-deck";
import EventPage from "layouts/pages/event_enquery";

// @mui icons
import Modelling from "layouts/pages/modelling";
import PhotoGalleryEventAreas from "layouts/pages/photo_gallery/event_areas";
import Videogallery from "layouts/pages/videogallery/index";
import FloorPlans from "layouts/pages/floor_plans";

import {
  ArrowCycle,
  Image,
  Video,
  Globe,
  ShippingBoxV1,
  StackOverflowFill,
  Paper,
  Calendar,
  InstagramFill,
  Location,
  Miniplayer,
  File,
  Grid,
} from "akar-icons";
// import { ArrowCycle, Image, Video, Globe, ShippingBoxV1, Paper, Calendar, InstagramFill, Location } from 'akar-icons';

// import Event from "layouts/pages/event_enquery";
let size = 18;

function routePage(mainRoute) {
  return `${mainRoute}`;
}

function keyPage(mainKey) {
  return `${mainKey}`;
}

const routes = [
  {
    type: "collapse",
    name: "VIRTUAL TOUR",
    key: keyPage("virtualtour"),
    noCollapse: true,
    route: routePage("/virtualtour"),
    icon: <ArrowCycle className="iconPositionChangeSN" strokeWidth={2} size={size} />,
    component: <VirtualTour />,
  },
  {
    type: "collapse",
    name: "PHOTO GALLERY",
    key: keyPage("photo-gallery"),
    noCollapse: true,
    route: routePage("/photo-gallery"),
    isReload: true,
    icon: <Image className="iconPositionChangeSN" size={size} color="#fff" />,
    component: <PhotoGalleryEventAreas />,
  },
  {
    type: "collapse",
    name: "VIDEO GALLERY",
    key: keyPage("video-gallery"),
    noCollapse: true,
    route: routePage("/video-gallery"),
    isReload: true,
    icon: <Video strokeWidth={2} className="iconPositionChangeSN" size={size} />,
    component: <Videogallery />,
  },
  {
    type: "collapse",
    name: "FLOOR PLANS",
    key: keyPage("floor-plans"),
    // noCollapse: true,
    route: routePage("/floor-plans"),
    icon: <Miniplayer strokeWidth={2} className="iconPositionChangeSN" size={size} />,
    component: <FloorPlans subMenu="home" />,
    collapse: [
      {
        name: "3RD FLOOR",
        key: "overview",
        route: routePage("/floor-plans/3rdFloor"),
        component: <FloorPlans subMenu="3rdFloor" />,
      },
      {
        name: "11TH FLOOR",
        key: "weddings",
        route: routePage("/floor-plans/11thFloor"),
        component: <FloorPlans subMenu="11thFloor" />,
      },
      {
        name: "12TH FLOOR",
        key: "things-to-do",
        route: routePage("/floor-plans/12thFloor"),
        component: <FloorPlans subMenu="12thFloor" />,
      },
    ],
  },
  {
    type: "collapse",
    name: "3D MODEL",
    key: keyPage("3D-Model"),
    noCollapse: true,
    route: routePage("/3d-model"),
    icon: <Globe strokeWidth={2} className="iconPositionChangeSN" size={size} />,
    component: <Modelling />,
  },
  {
    type: "collapse",
    name: "STAGING OPTIONS",
    key: keyPage("staging-options"),
    noCollapse: true,
    route: routePage("/staging-options"),
    icon: <ShippingBoxV1 strokeWidth={2} className="iconPositionChangeSN" size={size} />,
    component: <StagingOptions />,
  },

  {
    type: "collapse",
    name: "SALES DECK",
    key: keyPage("sales-deck"),
    noCollapse: true,
    route: routePage("/sales-deck"),
    icon: <File strokeWidth={2} className="iconPositionChangeSN" size={size} />,
    component: <SalesDeck />,
  },
  {
    type: "collapse",
    name: "EVENT INQUIRY",
    key: keyPage("event-inquiry"),
    noCollapse: true,
    route: routePage("/event-inquiry"),
    icon: <Calendar strokeWidth={2} className="iconPositionChangeSN" size={size} />,
    component: <EventPage />,
  },
  {
    type: "collapse",
    name: "INSTAGRAM",
    key: keyPage("instagram"),
    noCollapse: true,
    route: routePage("/instagram"),
    icon: <InstagramFill strokeWidth={2} className="iconPositionChangeSN" size={size} />,
    component: <InstagramPage />,
  },
  {
    type: "collapse",
    name: "MAP / DIRECTIONS",
    key: keyPage("map-directions"),
    noCollapse: true,
    route: routePage("/map-directions"),
    icon: <Location strokeWidth={2} className="iconPositionChangeSN" size={size} />,
    component: <MapDirections />,
  },
  {
    type: "imgWithInfo",
    name: "Basic",
    key: "basic",
  },

  {
    type: "core_Link",
    name: "BasicTwo",
    key: "basicTwo",
    collapse: [
      // Photo Gallery
      {
        name: "",
        key: "event-spaces",
        route: routePage("/photo-gallery/eventSpaces"),
        component: <PhotoGalleryEventAreas />,
      },
      {
        name: "",
        key: "Lobby",
        route: routePage("/photo-gallery/Lobby"),
        component: <PhotoGalleryEventAreas />,
      },
      {
        name: "",
        key: "Exterior",
        route: routePage("/photo-gallery/Exterior"),
        component: <PhotoGalleryEventAreas />,
      },
      {
        name: "",
        key: "Restaurant",
        route: routePage("/photo-gallery/Restaurant"),
        component: <PhotoGalleryEventAreas />,
      },
      {
        name: "",
        key: "Rooms",
        route: routePage("/photo-gallery/Rooms"),
        component: <PhotoGalleryEventAreas />,
      },
      {
        name: "",
        key: "Amenities",
        route: routePage("/photo-gallery/Amenities"),
        component: <PhotoGalleryEventAreas />,
      },
    ],
  },
];

export default routes;
