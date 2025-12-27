export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="flex items-center justify-between bg-slate-700 px-3 py-2 rounded-lg">
      <div
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer flex-1 ${
          task.completed ? "line-through text-slate-400" : ""
        }`}
      >
        {task.text}
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="ml-3 text-red-400 hover:text-red-500"
      >
        ✕
      </button>
    </div>
  );
}
