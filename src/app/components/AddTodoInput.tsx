"use client";
import { useState } from "react";

const AddTodoInput = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Add new item"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
    </>
  );
};

export default AddTodoInput;
