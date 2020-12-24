import React from "react";

// CSS imports 
import "./Body.css";

// Component Imports
import Header from "../Header/Header";
import SongRow from "../SongsRow/SongRow";

// DataLayer Imports
import { useDataLayerValue } from "../../DataLayer";

// Icon Imports from material-ui
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header />
      {/* "data:image/jpeg;base64,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" */}
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon className="like" fontSize="large" />
          <MoreHorizIcon className="horzion" />
        </div>
        {/*  list of songs  */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
