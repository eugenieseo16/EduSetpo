export interface GradeCategory {
  category: string;
  tutorId: number;
}

export interface Grade {
  categoryId: number;
  examDate: string;
  examTitle: string;
  score: number;
  studentSessionId: number;
}
