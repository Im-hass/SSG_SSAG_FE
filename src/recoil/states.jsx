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

export const isDestinationState = atom({
  key: 'isDestination',
  default: false,
});
