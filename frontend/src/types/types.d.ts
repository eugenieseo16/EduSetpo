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
