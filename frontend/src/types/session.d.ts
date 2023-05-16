import { StudentEntity } from './student';
import { LocalDate, LocalTime } from './types';

export interface Session {
  actualDate: string;
  defaultDate: string;
  duration: number;
  endTime: LocalTime;
  isCompleted: boolean;
  lessonId: number;
  memo: string;
  startTime: LocalTime;
}

export interface SessionResponse {
  sessionId: number;
  // lesson: 레슨 객체;
  isCompleted: boolean;
  memo: string;
  actualDate: LocalDate;
  startTime: LocalTime;
  endTime: LocalTime;
  duration: number;
  studentList: Array<StudentEntity>;
  // findTagsDtoList: Array<해당 객체>
}

export interface SessionToggle {
  isCompleted: boolean;
}

export interface SessionUpdate {
  isCompleted: boolean;
  memo: string;
  actualDate: LocalDate;
  startTime: LocalTime;
  endTime: LocalTime;
  duration: number;
}
