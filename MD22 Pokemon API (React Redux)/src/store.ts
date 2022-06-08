import { configureStore } from '@reduxjs/toolkit';
import pokemonApi from './ReduxSlices/Pokemon';

const store = configureStore({
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(pokemonApi.middleware),
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
