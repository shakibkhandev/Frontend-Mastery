import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <button
      className={`btn ${variant}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={text}
    >
      {text}
    </button>
  );
};

export default Button;
