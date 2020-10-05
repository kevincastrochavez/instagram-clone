import React from "react";
import { Avatar } from "@material-ui/core";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__header-avatar"
          alt="Kevin Castro"
          src="/static/images/avatar/1.jpg"
        />

        <h3>Username</h3>
      </div>

      <img className="post__image" src="" alt="" />

      <h4 className="post__text">
        <strong>Username:</strong> caption
      </h4>
    </div>
  );
}

export default Post;
