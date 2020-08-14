import { types, Instance } from 'mobx-state-tree';

export const Video = types
  .model('Video', {
    id: types.integer,
    name: types.string,
  });

export interface IVideo extends Instance<typeof Video>{};