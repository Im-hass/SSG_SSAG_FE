import { atom } from 'recoil';

export const searchValueState = atom({
  key: 'searchValue',
  default: '',
});
