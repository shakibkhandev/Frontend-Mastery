/**
 * React with TypeScript Crash Course
 *
 * This file serves as a comprehensive educational resource covering React with TypeScript.
 * It demonstrates core concepts, best practices, and advanced patterns with detailed comments.
 */

import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import TodoItem, { Todo } from "./components/TodoItem";
import { ThemeContext } from "./context/ThemeContext";
import useLocalStorage from "./hooks/useLocalStorage";

// TypeScript interfaces for props and state
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// 🔹 Main App Component
const App: React.FC = () => {
  // 🔹 State Management with useState
  // Managing state using useState with proper types
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn TypeScript", completed: false },
    { id: 3, text: "Build a project", completed: false },
  ]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Using our custom hook
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  // 🔹 useRef for accessing DOM elements
  const inputRef = useRef<HTMLInputElement>(null);

  // 🔹 useEffect for side effects with dependencies
  useEffect(() => {
    // This effect runs after every render
    document.title = `Count: ${count}`;

    // Cleanup function (runs before the next effect or when component unmounts)
    return () => {
      document.title = "React App";
    };
  }, [count]); // Only re-run the effect if count changes

  // 🔹 Event Handling
  // Type-safe event handling
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // 🔹 Conditional Rendering
  // Using ternary operators and logical &&
  const renderUserInfo = () => {
    if (!user) {
      return <p>Please log in</p>;
    }

    return (
      <div className="user-info">
        <h3>Welcome, {user.name}!</h3>
        <p>Email: {user.email}</p>
        <p>Status: {user.isActive ? "Active" : "Inactive"}</p>
      </div>
    );
  };

  // 🔹 Styling Options
  // Inline styles example
  const containerStyle: React.CSSProperties = {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#333",
    transition: "all 0.3s ease",
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="app-container" style={containerStyle}>
        <header>
          <h1>React + TypeScript Crash Course</h1>
          <Button
            text={isDarkMode ? "Light Mode" : "Dark Mode"}
            onClick={toggleTheme}
            variant={isDarkMode ? "secondary" : "primary"}
          />
        </header>

        <main>
          <section className="section">
            <h2>🔹 Basic Setup & Syntax</h2>
            <p>This section demonstrates basic React with TypeScript setup.</p>
          </section>

          <section className="section">
            <h2>🔹 Props & State</h2>
            <div className="counter">
              <p>Count: {count}</p>
              <Button text="Increment" onClick={handleButtonClick} />
            </div>
          </section>

          <section className="section">
            <h2>🔹 Event Handling & Forms</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="todo-input">Add Todo:</label>
                <input
                  id="todo-input"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  ref={inputRef}
                  placeholder="Enter a new todo"
                  aria-label="Todo input"
                />
                <Button
                  text="Add Todo"
                  onClick={() => {}}
                  disabled={!inputValue.trim()}
                />
              </div>
            </form>
          </section>

          <section className="section">
            <h2>🔹 Lists & Keys</h2>
            <div className="todo-list">
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))
              ) : (
                <p>No todos yet. Add one above!</p>
              )}
            </div>
          </section>

          <section className="section">
            <h2>🔹 Conditional Rendering</h2>
            {renderUserInfo()}
            <Button
              text={user ? "Logout" : "Login"}
              onClick={() =>
                setUser(
                  user
                    ? null
                    : {
                        id: 1,
                        name: "John Doe",
                        email: "john@example.com",
                        isActive: true,
                      }
                )
              }
            />
          </section>

          <section className="section">
            <h2>🔹 Hooks & Effects</h2>
            <p>The document title updates with the count: {count}</p>
            <p>Try clicking the increment button to see the effect!</p>
          </section>
        </main>

        <footer>
          <p>
            React + TypeScript Crash Course - A comprehensive learning resource
          </p>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
