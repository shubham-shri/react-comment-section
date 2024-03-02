import React from "react";
import "./CommentInput.css";

const CommentInput = ({ id, addComment }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    addComment(id, e.target.value);
  };

  return (
    <div className="comment-input__container">
      <form className="comment-form" onSubmit={onSubmit}>
        <input className="comment-input" placeholder="Type a comment..." />
        <button className="comment-input__btn" type="submit">
          <span
            onClick={onSubmit}
            className="material-symbols-outlined comment-input__icon"
          >
            send
          </span>
        </button>
      </form>
    </div>
  );
};

export default CommentInput;
