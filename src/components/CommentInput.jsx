import React, { useState } from "react";
import "./CommentInput.css";

const CommentInput = ({ id, addComment }) => {
  const [content, setContent] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addComment(id, content);
    setContent("");
  };

  return (
    <div
      className={`comment-input__container ${id === -1 ? "root-input" : ""}`}
    >
      <form className="comment-form" onSubmit={onSubmit}>
        <input
          className="comment-input"
          id={`comment-input-${id}`}
          placeholder="Type a comment..."
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button className="comment-input__btn" type="submit">
          <span className="material-symbols-outlined comment-input__icon">
            send
          </span>
        </button>
      </form>
    </div>
  );
};

export default CommentInput;
