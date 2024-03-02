import React from "react";
import Comment from "./Comment";
import "./CommentContainer.css";

const CommentContainer = ({ comment, addComment }) => {
  const { id, content, replies } = comment;
  return (
    <div className="comment-container">
      <Comment
        key={id}
        id={id}
        content={content}
        replies={replies}
        addComment={addComment}
      />
    </div>
  );
};

export default CommentContainer;
