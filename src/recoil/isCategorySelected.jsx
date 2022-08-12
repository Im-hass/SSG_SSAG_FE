import { atom } from 'recoil';

export const isCategorySelected = atom({
  key: 'isCategorySelected',
  default: new Array(11).fill(false),
});
