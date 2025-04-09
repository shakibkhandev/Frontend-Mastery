import React from "react";
import Button from "./Button";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

class TodoItem extends React.Component<TodoItemProps> {
  render() {
    const { todo, onToggle, onDelete } = this.props;
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          id={`todo-${todo.id}`}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </label>
        <Button
          text="Delete"
          onClick={() => onDelete(todo.id)}
          variant="secondary"
        />
      </div>
    );
  }
}

export default TodoItem;
