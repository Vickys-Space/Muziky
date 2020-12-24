import React from "react";

// CSS imports 
import "./Header.css";

// Icon Imports from material-ui-icon
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

// DataLayer Imports 
import {useDataLayerValue} from "../../DataLayer"

function Header({ spotify }) {

    const [{ user}, dispatch ] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon className="header_leftSearch" />
        <input placeholder="Search for Artist, Songs or Podcasts"/>
      </div>
      <div className="header_right">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>       
          <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
