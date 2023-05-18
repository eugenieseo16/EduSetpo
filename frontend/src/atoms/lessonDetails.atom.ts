import { atom } from 'recoil';

type ScheduleItem = {
  day: string;
  startTime: [number, number];
  endTime: [number, number];
};

export const lessonDetailsState = atom({
  key: 'lessonDetailsState',
  default: {
    studentLessonId: 0,
    tutorName: '',
    childName: '',
    lessonId: 0,
    studentId: 0,
    lessonName: '',
    memo: '',
    schedule: [] as ScheduleItem[],
  },
});
