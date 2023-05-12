import { atom } from 'recoil';

export const mwState = atom({
  key: 'mwState',
  // W: week, M: month
  default: 'W',
});

export const monthState = atom({
  key: 'monthState',
  default: new Date().getMonth() + 1,
});

export const yearState = atom({
  key: 'yearState',
  default: new Date().getFullYear(),
});
