import { atom } from 'recoil';

// 달력 주, 월 표시 결정
export const mwState = atom({
  key: 'mwState',
  // W: week, M: month
  default: 'W',
});

// 현재 날짜 (일)
export const dateState = atom({
  key: 'dateState',
  default: new Date().getDate(),
})

// 현재 날짜 (월)
export const monthState = atom({
  key: 'monthState',
  default: new Date().getMonth() + 1,
});

// 현재 날짜 (년)
export const yearState = atom({
  key: 'yearState',
  default: new Date().getFullYear(),
});

