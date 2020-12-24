import React from "react";

// CSS Imports 
import "./Login.css";

// Component Imports 
import { loginUrl } from "../../spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="/images/Muz.png"
        alt="/images/eveFull.png"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      <video autoPlay loop muted>
        <source src="/videos/aiMotion.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Login;

//https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png

