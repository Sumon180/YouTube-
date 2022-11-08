import React from "react";
import "./Sidenabar.css";

import HomeIcon from "@mui/icons-material/Home";

import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

const Sidenevbar = () => {
  return (
    <aside className="mainside">
      <div className="home">
        <HomeIcon />
        <p>Home</p>
      </div>
      <div className="home">
        <SubscriptionsIcon />
        <p>Shorts</p>
      </div>
      <div className="home">
        <SubscriptionsIcon />
        <p>Subscription</p>
      </div>

      <div className="home">
        <VideoLibraryIcon />
        <p>Library</p>
      </div>
    </aside>
  );
};

export default Sidenevbar;
