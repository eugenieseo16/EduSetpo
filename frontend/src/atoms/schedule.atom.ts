import { atom } from 'recoil';

// 달력 주, 월 표시 결정
export const mwState = atom({
  key: 'mwState',
  // W: week, M: month
  default: 'W',
});

// 변동 없는 현재 날짜 정보
export const staticTodayState = atom({
  key: 'staticTodayState',
  default: new Date(),
});

// 현재 날짜 (일)
export const todayState = atom({
  key: 'todayState',
  default: new Date(),
});

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
