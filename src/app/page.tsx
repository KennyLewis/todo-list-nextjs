"use client";
import { useCallback, useState } from "react";
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

  const handleAddTodo = useCallback((label: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: uuid(),
        label,
        checked: false,
      },
    ]);
  }, []);

  const handleChange = useCallback((id: string, checked: boolean) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked } : todo
      );
      return updatedTodos;
    });
  }, []);

  return (
    <div className="grid justify-center content-center gap-4 p-4">
      <h1 className="text-2xl font-bold text-center">Todo List</h1>
      <AddTodoInput onAdd={handleAddTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onChange={handleChange} />
      ))}
    </div>
  );
}
