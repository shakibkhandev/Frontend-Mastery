// page.tsx or <the_file_where_you_want_to_use>

"use client";
import { useGlobalContext } from "@/context/GlobalContextProvider";

export default function Home() {
  const { sayHello } = useGlobalContext();
  sayHello();
  return <main>Hello World</main>;
}
