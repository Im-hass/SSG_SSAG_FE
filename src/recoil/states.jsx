import { atom } from 'recoil';

export const isOpenState = atom({
  key: 'isOpen',
  default: false,
});

export const searchValueState = atom({
  key: 'searchValue',
  default: '',
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

export const orderInfoState = atom({
  key: 'orderInfo',
  default: {
    addr: {},
    recipient: {},
    message: '',
  },
});

export const productOptionId = atom({
  key: 'productOptionId',
  default: null,
});

export const selectedProductCount = atom({
  key: 'productCount',
  default: 1,
});
