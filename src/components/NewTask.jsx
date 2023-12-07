import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = () => {
    onAdd(input);
    setInput("");
  };

  return (
    <div className="flex items-start gap-4">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleAddTask}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
