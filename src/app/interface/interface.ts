export interface Task {
  id: number,
  name: string;
  dueDate: Date;
  isCompleted: boolean;
  people: {
    fullName: string;
    age: number;
    skills: { name: string }[];
  }[];
}