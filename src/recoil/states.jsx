import { atom } from 'recoil';

export const isOpenState = atom({
  key: 'isOpen',
  default: false,
});

export const searchValueState = atom({
  key: 'searchValue',
  default: '',
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

export const sendOrderState = atom({
  key: 'sendOrder',
});

export const productOptionId = atom({
  key: 'productOptionId',
  default: null,
});

export const selectedProductCount = atom({
  key: 'productCount',
  default: 1,
});

export const selectedOptionInfo = atom({
  key: 'optionInfo',
  default: {},
});

export const isHeaderCartCntSubmit = atom({
  key: 'isHeaderCartCntSubmit',
  default: false,
});
