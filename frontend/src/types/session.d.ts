import { StudentEntity } from './student';
import { LocalDate, LocalTime } from './types';

export interface Session {
  sessionId: number;
  actualDate: number[];
  defaultDate: string;
  duration: number;
  endTime: number[];
  isCompleted: boolean;
  lessonId: number;
  memo: string;
  startTime: number[];
}

interface SessionLesson {
  createdAt: number[];
  endDate: null;
  ended: boolean;
  lessonId: number;
  lessonName: string;
  memo: string;
  startDate: number[];
  totalTime: number;
  tutorId: number;
}

export interface SessionResponse {
  sessionId: number;
  lesson: SessionLesson;
  isCompleted: boolean;
  memo: string;
  actualDate: number[];
  startTime: number[];
  endTime: number[];
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
