import {configureStore} from '@reduxjs/toolkit';
import myCharacterSelectionReducer from '../features/MyCharacterSelection/store/myCharacterSelectionSlice';

const store = configureStore({
  reducer: {
    myCharacterSelection: myCharacterSelectionReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
