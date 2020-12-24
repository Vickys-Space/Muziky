import React from "react";

// CSS Imports
import "./Footer.css";

// Icon Imports from material-ui-icon
import PlayCircleIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipNextIcon from "@material-ui/icons/SkipNextOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPreviousOutlined";
import ShuffleIcon from "@material-ui/icons/ShuffleOutlined";
import RepeatIcon from "@material-ui/icons/RepeatOutlined";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

// Imports from material-ui-core
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src="https://img.discogs.com/9fsfMtpIIpCkOISWOye0vQ7-ygA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4212342-1358690801-3243.jpeg.jpg"
          alt=""
        />
        <div className="footer_songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid Item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid Item>
            <VolumeDownIcon />
          </Grid>
          <Grid Item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
