import React from "react";
import Post from "./components/Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__header-image"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
      </div>

      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
