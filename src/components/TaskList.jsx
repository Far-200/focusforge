import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-slate-800/90 backdrop-blur p-4 rounded-2xl">
      <h3 className="text-lg font-semibold mb-3 text-emerald-400">
        Tasks
      </h3>

      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What will you focus on?"
          className="flex-1 px-2 py-1 rounded bg-slate-700 outline-none"
        />
        <button
          onClick={addTask}
          className="px-3 bg-emerald-500 text-black rounded"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}
