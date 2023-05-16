import { LocalDateTime } from './types';

export interface StudentEntity {
  studentId: number;
  tutorId: number;
  // tutor: 튜터 객체
  studentName: string;
  studentContact: string;
  parentContact: string;
  isActive: boolean;
  createdAt: LocalDateTime;
}

export interface Student {
  isActive: boolean;
  parentContact: string;
  studentContact: string;
  studentName: string;
  tutorid: number;
}

export interface StudentToggle {
  tutorId: number;
  isActive: boolean;
}

export interface StudentUpdate {
  tutorId: number;
  studentName: string;
  studentContact: string;
  parentContact: string;
}
