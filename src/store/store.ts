import {configureStore} from '@reduxjs/toolkit';
import myCharacterSelectionReducer from '../features/MyCharacterSelection/store/myCharacterSelectionSlice';
import {tron} from '../utils/reactotron';

const store = configureStore({
  reducer: {
    myCharacterSelection: myCharacterSelectionReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware(),
  enhancers: (__DEV__ ? [tron?.createEnhancer()] : []) as any,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
