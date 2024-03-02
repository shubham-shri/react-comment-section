const getCommentObjFromContent = (content) => {
  return {
    id: Date.now(),
    content,
    replies: [],
  };
};
const addCommentInCommentsArray = (
  commentsArr,
  parentCommentId,
  commentObj
) => {
  if (parentCommentId === -1) {
    // root comment
    return [commentObj, ...commentsArr];
  }

  for (let i = 0; i < commentsArr.length; i++) {
    const { id, replies } = commentsArr[i];
    if (id === parentCommentId) {
      commentsArr[i].replies = [commentObj, ...replies];
      return commentsArr;
    } else {
      addCommentInCommentsArray(replies, parentCommentId, commentObj);
    }
  }

  return commentsArr;
};

const setCommentsToLocalStorage = (commentsArr) => {
  localStorage.setItem("commentsArr", JSON.stringify(commentsArr));
};

const getCommentFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("commentsArr"));
};

export {
  getCommentObjFromContent,
  addCommentInCommentsArray,
  getCommentFromLocalStorage,
  setCommentsToLocalStorage,
};
