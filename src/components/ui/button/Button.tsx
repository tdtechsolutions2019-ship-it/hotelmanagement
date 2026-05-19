import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md";
  variant?: "primary" | "outline" | "custom";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  disabled?: boolean;
  className?: string;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "",
  type = "button",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
}) => {

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3.5 text-sm",
  };

  const variantClasses = {
    primary:
      "bg-black text-white shadow-theme-xs",

    outline:
      "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",

   
  };
console.log("className",className)
  return (
    <button
      className={`
       
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        font-medium
        transition
        ${sizeClasses[size]}
        ${variantClasses[variant] || ""}
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
        ${className}
      `}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {startIcon && (
        <span className="flex items-center">
          {startIcon}
        </span>
      )}

      {children}

      {endIcon && (
        <span className="flex items-center">
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;