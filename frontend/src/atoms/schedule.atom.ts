import { atom } from 'recoil';

export const mwState = atom({
  key: 'mwState',
  // W: week, M: month
  default: 'W',
});
