export interface GradeCategory {
  category: string;
  gradeCategoryId: number;
}

export interface Grade {
  gradeId: number;
  categoryId: number;
  examDate: string;
  examTitle: string;
  score: number;
  studentSessionId: number;
}

export interface GradeReq {
  gradeId: number;
  categoryId: number;
  examDate: string;
  examTitle: string;
  score: number;
  studentSessionId: number;
}
