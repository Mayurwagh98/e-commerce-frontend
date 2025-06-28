import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "rounded-xl font-medium transition-all duration-200 focus:outline-none",
        {
          "bg-black text-white hover:bg-gray-900": variant === "default",
          "border border-gray-300 bg-transparent text-black hover:bg-gray-100":
            variant === "outline",
          "px-4 py-2 text-sm": size === "sm",
          "px-5 py-2.5 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
