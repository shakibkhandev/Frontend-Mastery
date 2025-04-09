"use client";

import { useCounterStore } from "../store/useCounterStore";

export default function Home() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-4xl font-bold">Zustand Counter Example</h1>
      <div className="text-6xl font-bold">{count}</div>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increment
        </button>
      </div>
    </main>
  );
}
