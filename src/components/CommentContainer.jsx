import React from "react";
import Comment from "./Comment";
import "./CommentContainer.css";

const CommentContainer = ({ comment }) => {
  const { id, content, replies } = comment;
  return (
    <div className="comment-container">
      <Comment key={id} id={id} content={content} replies={replies} />
    </div>
  );
};

export default CommentContainer;
