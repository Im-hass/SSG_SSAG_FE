import { atom } from 'recoil';

export const isOpenState = atom({
  key: 'isOpen',
  default: false,
});

export const searchValueState = atom({
  key: 'searchValue',
  default: '',
});

export const isLoginState = atom({
  key: 'isLogin',
  default: false,
});

export const isItemsState = atom({
  key: 'isItems',
  default: false,
});

export const isCategorySelected = atom({
  key: 'isCategorySelected',
  default: new Array(11).fill(false),
});

export const isModalOpenState = atom({
  key: 'isModalOpen',
  default: false,
});

export const isCategorySelected2 = atom({
  key: 'isCategorySelected2',
  default: new Array(6).fill(false),
});
