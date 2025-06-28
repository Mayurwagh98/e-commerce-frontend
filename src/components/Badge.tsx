import React from "react";
import clsx from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={clsx(
        "inline-block px-3 py-1 text-xs font-semibold rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
