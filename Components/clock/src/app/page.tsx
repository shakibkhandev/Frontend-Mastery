"use client";

import Clock from "@/components/Clock";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Clock international={false} theme="light"  clockType="both" size="sm" />
    </main>
  );
}
