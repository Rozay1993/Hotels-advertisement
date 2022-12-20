import React from "react";
import IconButton from "@mui/material/IconButton";
import SinglePhotos from "./SinglePhotos";
import MinimalPhotos from "./MinimalPhotos";
import StandardPhotos from "./StandardPhotos";

import "./gallery.css";

const standarPhotos = [
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-1.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-1-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-2.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-2-thumb.jpg",
    isPortrait: true,
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-3.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-3-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-4.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-4-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-5.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-5-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-6.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-6-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-7.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-7-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-9.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-9-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-8.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-8-thumb.jpg",
    isPortrait: true,
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-10.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-10-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-11.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-11-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-12.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-12-thumb.jpg",
    isPortrait: true,
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-13.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-13-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-14.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-14-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-15.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-15-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-16.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-16-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-17.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-17-thumb.jpg",
    isPortrait: true,
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-18.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-18-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-19.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-19-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-20.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-20-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-21.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-21-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-22.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-22-thumb.jpg",
    isPortrait: true,
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-23.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-23-thumb.jpg",
  },
  {
    type: "EventSpaces",
    url: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-24.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-24-thumb.jpg",
  },

  {
    type: "Lobby",
    url: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-1.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-1-thumb.jpg",
  },
  {
    type: "Lobby",
    url: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-2.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-2-thumb.jpg",
  },
  {
    type: "Lobby",
    url: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-3.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-3-thumb.jpg",
  },
  {
    type: "Lobby",
    url: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-4.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-4-thumb.jpg",
  },
  {
    type: "Lobby",
    url: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-5.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-5-thumb.jpg",
  },
  {
    type: "Lobby",
    url: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-6.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-6-thumb.jpg",
  },
  {
    type: "Lobby",
    url: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-7.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-7-thumb.jpg",
  },
  {
    type: "Lobby",
    url: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-8.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-8-thumb.jpg",
  },
  {
    type: "Lobby",
    url: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-9.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-9-thumb.jpg",
  },
  {
    type: "Lobby",
    url: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-10.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-10-thumb.jpg",
  },
  {
    type: "Lobby",
    url: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-11.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-11-thumb.jpg",
  },

  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-1.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-1-thumb.jpg",
  },
  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-2.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-2-thumb.jpg",
  },
  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-3.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-3-thumb.jpg",
  },
  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-4.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-4-thumb.jpg",
  },
  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-5_01.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-5_01-thumb.jpg",
  },
  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-6.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-6-thumb.jpg",
  },

  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-8.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-8-thumb.jpg",
  },
  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-9.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-9-thumb.jpg",
  },
  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-10.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-10-thumb.jpg",
  },
  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-11.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-11-thumb.jpg",
  },
  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-12.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-12-thumb.jpg",
  },
  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-13.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-13-thumb.jpg",
  },
  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-14.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-14-thumb.jpg",
  },
  {
    type: "Exterior",
    url: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-15.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-15-thumb.jpg",
  },

  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-1.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-1-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-2.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-2-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-3.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-3-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-4.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-4-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-5.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-5-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-6.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-6-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-7.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-7-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-8.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-8-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-9.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-9-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-10.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-10-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-11.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-11-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-12.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-12-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-13.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-13-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-14.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-14-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-15.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-15-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-16.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-16-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-17.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-17-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-18.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-18-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-19.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-19-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-20.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-20-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-21.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-21-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-22.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-22-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-23.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-23-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-24.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-24-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-25.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-25-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-26.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-26-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-27.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-27-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-28.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-28-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-29.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-29-thumb.jpg",
  },
  {
    type: "Restaurant",
    url: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-30.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-30-thumb.jpg",
  },

  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-1.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-1-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-2.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-2-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-3.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-3-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-4.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-4-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-5.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-5-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-6.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-6-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-7.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-7-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-8.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-8-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-9.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-9-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-10.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-10-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-11.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-11-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-12.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-12-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-13.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-13-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-14.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-14-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-15.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-15-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-16.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-16-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-17.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-17-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-18.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-18-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-19.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-19-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-20.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-20-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-21.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-21-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-22.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-22-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-23.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-23-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-24.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-24-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-25.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-25-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-26.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-26-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-27.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-27-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-28.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-28-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-29.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-29-thumb.jpg",
  },
  {
    type: "Rooms",
    url: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-30.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-30-thumb.jpg",
  },

  {
    type: "Amenities",
    url: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-1.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-1-thumb.jpg",
  },
  {
    type: "Amenities",
    url: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-2.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-2-thumb.jpg",
    isPortrait: true,
  },
  {
    type: "Amenities",
    url: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-3.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-3-thumb.jpg",
  },
  {
    type: "Amenities",
    url: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-4.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-4-thumb.jpg",
  },
  {
    type: "Amenities",
    url: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-5.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-5-thumb.jpg",
  },
  {
    type: "Amenities",
    url: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-6.jpg",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-6-thumb.jpg",
  },
];

const FolderName = [
  {
    type: "EventSpaces",
    caption: "Event Spaces",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EVENT-SPACES-1-thumb.jpg",
  },
  {
    type: "Lobby",
    caption: "Lobby",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-LOBBY-1-thumb.jpg",
  },
  {
    type: "Exterior",
    caption: "Exterior",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-EXTERIOR-1-thumb.jpg",
  },
  {
    type: "Restaurant",
    caption: "Restaurant",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-RESTAURANT-1-thumb.jpg",
  },
  {
    type: "Rooms",
    caption: "Rooms",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-ROOMS-1-thumb.jpg",
  },
  {
    type: "Amenities",
    caption: "Amenities",
    thumb: "https://oneviwer.b-cdn.net/WESTIN-AMENITIES-1-thumb.jpg",
  },
];

const Gallery = () => {
  const [tab, setTab] = React.useState("minimal");
  const [folderName, setfolderName] = React.useState(FolderName);
  const [standerphotos, setstanderPhotos] = React.useState(standarPhotos);

  const [minimalStyle, SetminimalStyle] = React.useState({ filter: "brightness(0.5)" });
  const [standardStyle, SetstandardStyle] = React.useState({ filter: "brightness(1)" });
  const [singleStyle, SetsingleStyle] = React.useState({ filter: "brightness(1)" });

  const [getValueIcon, setGetValueIcon] = React.useState("");

  const handleChange = (value, valueBright) => {
    SetminimalStyle({
      filter: `brightness(${valueBright[0]})`,
    });
    SetstandardStyle({
      filter: `brightness(${valueBright[1]})`,
    });
    SetsingleStyle({
      filter: `brightness(${valueBright[2]})`,
    });
    setTab(value);
  };

  const getGalleryLayout = () => {
    switch (tab) {
      case "minimal":
        return <MinimalPhotos control={handleChange} photos={folderName} />;
      case "standard":
        let standerType = localStorage.getItem("folderName") || false;
        let filterData = standarPhotos;
        if (standerType != false) {
          filterData = standarPhotos.filter((value) => {
            return value.type == standerType;
          });
        }
        return <StandardPhotos control={handleChange} photos={filterData} />;
      case "single":
        let singleType = localStorage.getItem("folderName") || false;
        let singleUrl = localStorage.getItem("url") || false;
        let isPortrait = localStorage.getItem("isPortrait") || false;
        let itemIndex = localStorage.getItem("itemIndex") || false;
        let singleFileterData = standarPhotos;
        if (singleType != false) {
          singleFileterData = standarPhotos.filter((value) => {
            return value.type == singleType;
          });
        }

        if (singleUrl != false) {
          localStorage.removeItem("url");
          let defaultPhotoObj = { type: singleType, url: singleUrl };
          isPortrait ? (defaultPhotoObj.isPortrait = true) : "";
          return (
            <SinglePhotos
              defaultPhoto={defaultPhotoObj}
              photos={singleFileterData}
              itemIndex={itemIndex}
            />
          );
        } else {
          return <SinglePhotos photos={singleFileterData} itemIndex={itemIndex} />;
        }

      default:
        break;
    }
  };

  //That's the comment

  const getValueIconname = () => {
    switch (tab) {
      case "minimal":
        return (
          <div
            className="iconButtonGroup mobileheightzero"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              opacity: "0",
              visibility: "hidden",
              margintop: "-55px",
            }}
          >
            <IconButton
              onClick={() => {
                handleChange("minimal", [0.5, 1, 1]);
              }}
            >
              <img src="/images/grid4.png" style={minimalStyle} className="iconbuttonDG" />
            </IconButton>{" "}
            <IconButton
              style={{ zIndex: "9999" }}
              onClick={() => {
                handleChange("standard", [1, 0.5, 1]);
              }}
            >
              <img src="/images/grid9.png" style={standardStyle} className="iconbuttonDG" />
            </IconButton>{" "}
            <IconButton
              style={{ zIndex: "9999" }}
              onClick={() => {
                handleChange("single", [1, 1, 0.5]);
              }}
            >
              <img style={singleStyle} src="/images/grid1.png" className="iconbuttonDG" />
            </IconButton>{" "}
          </div>
        );
      default:
        return (
          <div
            className={
              tab == "single" ? "iconButtonGroup iconButtonGroupTopSpaceHandle" : "iconButtonGroup"
            }
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton
              className="homeGalleryButton"
              onClick={() => {
                handleChange("minimal", [0.5, 1, 1]);
              }}
            >
              <img src="/images/grid4.png" style={minimalStyle} className="iconbuttonDG" />
            </IconButton>{" "}
            <IconButton
              style={{ zIndex: "9999" }}
              onClick={() => {
                handleChange("standard", [1, 0.5, 1]);
              }}
            >
              <img src="/images/grid9.png" style={standardStyle} className="iconbuttonDG" />
            </IconButton>{" "}
            <IconButton
              style={{ zIndex: "9999" }}
              onClick={() => {
                handleChange("single", [1, 1, 0.5]);
              }}
            >
              <img style={singleStyle} src="/images/grid1.png" className="iconbuttonDG" />
            </IconButton>{" "}
          </div>
        );
    }
  };

  return (
    <div>
      {getValueIconname()}
      <div
        className={tab == "single" ? "" : "galleryLayoutScroll"}
        style={
          tab == "single"
            ? {
                width: "100%",
              }
            : {
                padding: "0px 51px 0px 47px",
              }
        }
      >
        {getGalleryLayout()}
      </div>
    </div>
  );
};

export default Gallery;


