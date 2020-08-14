import { types } from 'mobx-state-tree';
import { Video } from './video';

export const RootStore = types
  .model("RootStore", {
    videos: types.array(Video)
  });
