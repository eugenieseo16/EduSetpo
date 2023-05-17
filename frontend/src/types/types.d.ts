export interface IUser {
  userId: number;
  userNickname: string;
  userName: string;
  themeIndex: number;
}

export type ChildrenDto = {
  parentId: number;
  childName: string;
  studentLessonId: number;
};

export type Child = {
  childId: number;
  parent: {
    parentId: number;
    email: string;
    password: string;
    parentName: string;
    createdAt: [number, number, number];
    isWithdraw: boolean;
  };
  childName: string;
  studentLessonId: number;
};
export interface LocalTime {
  hour: string;
  minute: string;
  nano: number;
  second: string;
}

export interface LocalDateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
}

export interface LocalDate {
  year: number;
  month: number;
  day: number;
}
