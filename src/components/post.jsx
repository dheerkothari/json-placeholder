import React from "react";

const Post = ({id,title,body}) => {
  return (
    <li class="postRow">
      <h2 id={id}>
        {title}
      </h2>
      <p>
        {body}
      </p>
    </li>
  );
};

export default Post;
