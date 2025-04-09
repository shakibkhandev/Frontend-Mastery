'use client'
import { countAtom } from "@/atoms/counterAtom";
import { useAtom } from "jotai";

// Counter component that uses the atom
function Counter() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increase
        </button>
      </div>
    </div>
  );
}

// Display component that reads the atom
function Display() {
  const [count] = useAtom(countAtom);
  return (
    <div className="text-center p-4">
      <p className="text-lg">Current count from Display component: {count}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Jotai State Management Example
      </h1>
      <Counter />
      <Display />
    </main>
  );
}
