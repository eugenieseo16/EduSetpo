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
