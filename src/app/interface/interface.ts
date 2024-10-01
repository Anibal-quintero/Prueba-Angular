export interface Task {
  name: string;
  dueDate: Date;
  isCompleted: boolean;
  people: {
    fullName: string;
    age: number;
    skills: { name: string }[];
  }[];
}