import { atom } from 'recoil';

export const isOpenState = atom({
  key: 'isOpen',
  default: false,
});

export const searchValueState = atom({
  key: 'searchValue',
  default: '',
});
