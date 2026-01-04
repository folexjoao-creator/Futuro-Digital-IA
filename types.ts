
export interface User {
  id: string;
  name: string;
  role: 'STUDENT' | 'FACULTY' | 'ADMIN';
  studentId?: string;
  course?: string;
  avatar?: string;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}

export interface Grade {
  subject: string;
  test1: number;
  test2: number;
  exam: number;
  average: number;
  status: 'Aprovado' | 'Reprovado' | 'Exame';
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
}
