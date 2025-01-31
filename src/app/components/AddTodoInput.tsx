"use client";
import { FC, useState } from "react";

export interface AddTodoInputProps {
  onAdd: (label: string) => void;
}

const AddTodoInput: FC<AddTodoInputProps> = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleAddTodoFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(input);
    setInput("");
  };

  return (
    <form onSubmit={handleAddTodoFormSubmit}>
      <input
        type="text"
        placeholder="Add new item"
        className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
    </form>
  );
};

export default AddTodoInput;
