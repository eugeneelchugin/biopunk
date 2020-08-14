import { RootStore } from './rootStore';

export const createStore = () => {
  const store = RootStore.create({
    videos: [
      {id: 1, name: "Movie 1"},
      {id: 2, name: "Movie 2"},
      {id: 3, name: "Movie 43"}
    ]
  });
  return store;
};

export type TStore = ReturnType<typeof createStore>;
