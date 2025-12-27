import Timer from "./components/Timer";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-emerald-400">
          FocusForge
        </h1>

        <Timer />
        <TaskList />

        <p className="mt-6 text-center text-sm text-slate-400">
          Build focus. One session at a time.
        </p>
      </div>
    </div>
  );
}

export default App;
