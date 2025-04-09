"use client";
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleEvent = (e: React.MouseEvent) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const x = clientX / width;
    const y = clientY / height;

    setPosition({ x, y });
  };

  return (
    <main
      className="min-h-screen bg-gray-900 relative overflow-hidden"
      onMouseMove={handleEvent}
    >
      {/* Cursor follower */}
      <div
        className="w-8 h-8 bg-blue-500 rounded-full fixed pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x * window.innerWidth - 16}px, ${
            position.y * window.innerHeight - 16
          }px)`,
        }}
      />

      {/* Coordinates display */}
      <div className="fixed bottom-8 left-8 bg-black/50 text-white px-4 py-2 rounded-lg">
        <p>X: {(position.x * 100).toFixed(2)}%</p>
        <p>Y: {(position.y * 100).toFixed(2)}%</p>
      </div>
    </main>
  );
}
