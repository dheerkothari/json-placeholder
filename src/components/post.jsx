import React from "react";
import { useHistory } from "react-router";

const Post = ({id,title,body,onClick,hasBackButton}) => {
    const history = useHistory();
  const handleClick = () => {
      history.push("/posts")
  }
    return (
    <li class="postRow" onClick = {onClick}>
      <h2 id={id}>
        {title}
      </h2>
      <p>
        {body}
      </p>
      {hasBackButton &&<div>
      <button onClick = {handleClick}>Back</button>
      </div>}
    </li>
  );
};

export default Post;
