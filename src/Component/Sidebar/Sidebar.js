import React from "react";

// CSS Imports 
import "./Sidebar.css";

// Component Imports 
import SidebarOption from "../SidebarOptional/SidebarOption";
import { useDataLayerValue } from "../../DataLayer";

// Icon Imports 
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";


function Sidebar() {
    // eslint-disable-next-line 
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log("PLAYLISTS", playlists);
  
  return (
    <div className="sidebar">
      <img className="sidebar_logo" src="images/Muz.png" alt=""></img>

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your library" />

      <br />
      <strong className="sidebar_title"> P L A Y L I S T </strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
