import { useState } from "react";
import "./App.css";
import CommentContainer from "./components/CommentContainer";
function App() {
  const [comments, setComments] = useState([
    {
      id: 1,
      content: "First content",
      replies: [
        {
          id: 2,
          content: "first content's first reply",
          replies: [
            {
              id: 3,
              content: "first content's first reply's reply",
              replies: [],
            },
          ],
        },
        {
          id: 4,
          content: "first content's second reply",
          replies: [],
        },
      ],
    },
    {
      id: 5,
      content: "Second content",
      replies: [
        {
          id: 6,
          content: "Second content's first reply",
          replies: [],
        },
      ],
    },
    {
      id: 7,
      content: "Third content",
      replies: [],
    },
  ]);
  return (
    <div className="App">
      {comments.map((comment) => {
        const { id } = comment;
        return <CommentContainer key={id} comment={comment} />;
      })}
    </div>
  );
}

export default App;
