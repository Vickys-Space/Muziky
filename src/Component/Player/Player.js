import React from "react";

// CSS Imports
import "./Player.css";

// Component Imports
import Body from "../Body/Body";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
