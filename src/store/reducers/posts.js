import { ADD_POST, ADD_COMMENT } from "../actions/actionTypes";

const initialState = {
  posts: [
    {
      id: Math.random(),
      nickname: "Pessoa 1",
      email: "pessoa@te.com",
      image: require("../../../assets/imgs/fence.jpg"),
      comments: [
        {
          nickname: "Pessoa 2",
          comment: "...."
        },
        {
          nickname: "Pessoa 3",
          comment: "...."
        }
      ]
    },
    {
      id: Math.random(),
      nickname: "Pessoa 4",
      email: "pessoa@te.com",
      image: require("../../../assets/imgs/bw.jpg"),
      comments: []
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload
        })
      };
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            if (post.comments) {
              post.comments = post.comments.concat(action.payload.comment);
            } else {
              post.comments = [action.payload.comment];
            }
          }
          return post;
        })
      };
    default:
      return state;
  }
};

export default reducer;
