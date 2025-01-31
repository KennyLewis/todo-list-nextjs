"use client";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import AddTodoInput from "./components/AddTodoInput";
import TodoItem from "./components/TodoItem";


export default function Home() {

const initialData: Todo[] = [
  {
    id: uuid(),
    label: "Check email",
    checked: true,
  },
  {
    id: uuid(),
    label: "Schedule meeting with team",
    checked: false,
  },
  {
    id: uuid(),
    label: "Eat lunch",
    checked: false,
  },
];

const [todos, setTodos] = useState<Todo[]>(initialData);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Todo List</h1>
        <AddTodoInput />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
