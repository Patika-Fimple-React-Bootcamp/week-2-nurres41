import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "postSlice",
  initialState: initialState,
  reducers: {
    deletePost: (state, action) => {
      const postIdToDelete = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postIdToDelete);
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { deletePost,setPosts } = postSlice.actions;
export default postSlice.reducer;