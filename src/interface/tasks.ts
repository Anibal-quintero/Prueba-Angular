export interface Tasks {
    id: number,
    taskName: string,
    deadline: string,
    completed: Boolean,
    people: peop[]
}
export interface peop {
    fullName: string,
    age: number,
    skills: string[]
}
