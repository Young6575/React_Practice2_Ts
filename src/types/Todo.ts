export type completedT = "O" | "X"

export interface Todo {
    "text": string,
    "completed": completedT,
    "id": string
  }