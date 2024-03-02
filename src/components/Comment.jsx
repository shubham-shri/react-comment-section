import React, { useState } from "react";
import CommentInput from "./CommentInput";
import CommentContainer from "./CommentContainer";
import "./Comment.css";

const Comment = ({ id, content, replies, addComment }) => {
  const [isShowChildComments, setIsShowChildComments] = useState(false);
  const handleShowReply = () => {
    setIsShowChildComments((prev) => !prev);
  };

  return (
    <div>
      <div className="comment-box">{content}</div>
      <CommentInput id={id} addComment={addComment} />
      <button
        className="comment-box__show-replies-btn"
        onClick={handleShowReply}
      >
        {isShowChildComments && replies.length > 0 ? (
          <>
            Hide replies
            <span className="material-symbols-outlined">arrow_drop_up</span>
          </>
        ) : null}
        {!isShowChildComments && replies.length > 0 ? (
          <>
            {replies.length} {replies.length > 1 ? "replies" : "reply"}
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </>
        ) : null}
      </button>
      {isShowChildComments && replies.length > 0 ? (
        <div className="comment-box__child-comments">
          {replies.map((reply) => {
            const { id } = reply;
            return (
              <CommentContainer
                key={id}
                comment={reply}
                addComment={addComment}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Comment;
