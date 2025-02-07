export interface Quiz {
  id: string;
  title: string;
  duration: number;
  dueDate: Date;
  status: 'upcoming' | 'open' | 'closed';
  totalStudents: number;
  submitted: number;
  course: string;
}