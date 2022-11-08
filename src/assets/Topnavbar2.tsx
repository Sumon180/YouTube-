import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Topnavbar2.css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Topnavbar2 = () => {
  return (
    <div className="recentsearch">
      <div className="backarrow">
        <ArrowBackIosNewIcon />
      </div>
      <div className="container2">
        <ul>
          <li className="recentview">Home</li>
          <li className="recentview">Shorts</li>
          <li className="recentview">Subscription</li>
          <li className="recentview">Library</li>
          <li className="recentview">Home</li>
          <li className="recentview">Shorts</li>
          <li className="recentview">Subscription</li>
          <li className="recentview">Library</li>
          <li className="recentview">Shorts</li>
          <li className="recentview">Home</li>
          <li className="recentview">Library</li>
          {/* <li className="recentview">Home</li>
          <li className="recentview">Subscription</li>
          <li className="recentview">Home</li>
          <li className="recentview">Shorts</li>
          <li className="recentview">Subscription</li>
          <li className="recentview">Library</li>
          <li className="recentview">Home</li>
          <li className="recentview">Shorts</li>
          <li className="recentview">Subscription</li>
          <li className="recentview">Library</li>
          <li className="recentview">Shorts</li>
          <li className="recentview">Home</li>
          <li className="recentview">Library</li>
          <li className="recentview">Home</li>
          <li className="recentview">Subscription</li> */}
        </ul>
      </div>
      <div className="forwardarrow">
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default Topnavbar2;
