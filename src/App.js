import React, { useEffect } from "react";

// CSS Import
import "./App.css";

// Component Imports 
import Login from "../src/Component/Login/Login";
import Player from "../src/Component/Player/Player";

// API Import 
import SpotifyWebApi from "spotify-web-api-js";

// Data Imports
import { getTokenFromUrl } from "../src/spotify";
import { useDataLayerValue } from "../src/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // eslint-disable-next-line
  const [{ user, token }, dispatch] = useDataLayerValue();

  // useEffect runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    //  37i9dQZEVXcSFvZWKtz83w weekly playlist ID

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setToken(_token); // this _token is a temporary token

      spotify.setAccessToken(_token); // this is giving the access token to the actual spotify
      spotify.getMe().then((user) => {
        // this gets the user data from the spotify
        console.log("person", user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcSFvZWKtz83w").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
    // eslint-disable-next-line
  }, []);

  // console.log("data from dataLayer", user)
  // console.log("Token Data", token);

  return (
    // BEM
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
