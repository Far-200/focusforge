import { useEffect, useState } from "react";

const FOCUS_TIME = 25 * 60; // seconds
const BREAK_TIME = 5 * 60;

export default function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("Focus"); // Focus | Break

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 0) {
          const nextMode = mode === "Focus" ? "Break" : "Focus";
          setMode(nextMode);
          return nextMode === "Focus" ? FOCUS_TIME : BREAK_TIME;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, mode]);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="bg-slate-800/90 backdrop-blur p-6 rounded-2xl shadow-xl text-center mb-6">
      <h2 className="text-xl font-semibold mb-2 text-emerald-400">
        {mode} Session
      </h2>

      <div className="text-5xl font-mono mb-6">
        {minutes}:{seconds}
      </div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-4 py-2 bg-emerald-500 text-black rounded-lg font-semibold"
        >
          {isRunning ? "Pause" : "Start"}
        </button>

        <button
          onClick={() => {
            setIsRunning(false);
            setMode("Focus");
            setSecondsLeft(FOCUS_TIME);
          }}
          className="px-4 py-2 bg-slate-600 rounded-lg"
        >
          Reset
        </button>
        <p className="mt-3 text-xs text-slate-400">
            Stay present. One tick at a time.
        </p>
      </div>
    </div>
  );
}
