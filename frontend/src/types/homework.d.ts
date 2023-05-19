export interface Homework {
  homeworkId: number;
  content: string;
  isCompleted: boolean;
  sessionId: number;
  studentId: number;
}
export interface HomeworkReq {
  content: string;
  isCompleted: boolean;
  sessionId: number;
  studentId: number;
}
