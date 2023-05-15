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
