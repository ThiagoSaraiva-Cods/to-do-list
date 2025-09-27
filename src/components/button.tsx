import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`min-w-fit rounded-md bg-purple-700 p-2 text-sm text-white ${className}`}
    >
      {children}
    </button>
  );
};
