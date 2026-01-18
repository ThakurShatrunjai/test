import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    default:
      "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    outline:
      "border border-border bg-transparent text-foreground hover:bg-accent",
    ghost:
      "bg-transparent text-foreground hover:bg-accent",
  }[variant];

  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    default: "h-11 px-5 text-base",
    lg: "h-14 px-8 text-lg",
  }[size];

  return (
    <button
      className={`${base} ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    />
  );
}
