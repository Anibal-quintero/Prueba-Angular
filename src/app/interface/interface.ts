export interface Task {
  id: 0,
  name: string;
  dueDate: Date;
  isCompleted: boolean;
  people: {
    fullName: string;
    age: number;
    skills: { name: string }[];
  }[];
}