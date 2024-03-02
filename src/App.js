import { useState, useEffect } from "react";
import "./App.css";
import CommentContainer from "./components/CommentContainer";
import * as utils from "./utils";
import CommentInput from "./components/CommentInput";

function App() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setComments(utils.getCommentFromLocalStorage() || []);
  }, []);
  const addComment = (parentId, content) => {
    console.log("content", content);
    const commentObj = utils.getCommentObjFromContent(content);
    const updatedCommentsArr = utils.addCommentInCommentsArray(
      comments,
      parentId,
      commentObj
    );
    setComments([...updatedCommentsArr]);
    utils.setCommentsToLocalStorage(updatedCommentsArr);
  };
  return (
    <div className="App">
      <CommentInput id={-1} addComment={addComment} />
      {comments.map((comment) => {
        const { id } = comment;
        return (
          <CommentContainer
            key={id}
            comment={comment}
            addComment={addComment}
          />
        );
      })}
    </div>
  );
}

export default App;
