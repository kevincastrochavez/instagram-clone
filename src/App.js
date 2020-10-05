import React, { useState } from "react";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "kevincastro",
      caption: "It works",
      imageUrl: "https://via.placeholder.com/400x400",
    },
    {
      username: "kevincastro",
      caption: "It works",
      imageUrl: "http",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__header-image"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
      </div>

      {posts.map((post) => (
        <Post {...post} />
      ))}
    </div>
  );
}

export default App;
