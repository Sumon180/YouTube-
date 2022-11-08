import React from "react";
import "./Topnavbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const TopNavbar = () => {
  return (
    <nav className="topNavbar">
      <div className="bg-navbar">
        <div className="first-item">
          <div>
            <MenuIcon />
          </div>
          <div className="logo">
            <div>
              <YouTubeIcon />
            </div>
            <div className="ytpara">
              YouTube <span>BD</span>
            </div>
          </div>
        </div>
        <div className="middel-item">
          <div className="searchinput">
            <input className="searchin" type="text" placeholder="Search" />
            <SearchIcon />
          </div>

          <div className="speaker">
            <KeyboardVoiceIcon />
          </div>
        </div>
        <div className="last-item">
          <VideoCallIcon />
          <NotificationsNoneIcon />
          <span className="ytpara2">S</span>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
