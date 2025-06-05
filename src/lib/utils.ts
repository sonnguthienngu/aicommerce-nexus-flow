import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getButtonStyles({
  variant = "default",
  size = "default",
  fullWidth = false,
  rounded = false,
  disabled = false,
  loading = false,
}: {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "success" | "warning" | "info";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    success: "bg-green-600 text-white hover:bg-green-700",
    warning: "bg-yellow-600 text-white hover:bg-yellow-700",
    info: "bg-blue-600 text-white hover:bg-blue-700",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    xl: "h-12 px-10 text-lg",
    icon: "h-10 w-10",
  };

  const states = {
    fullWidth: "w-full",
    rounded: "rounded-full",
    disabled: "opacity-50 cursor-not-allowed",
    loading: "cursor-wait",
  };

  return cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && states.fullWidth,
    rounded && states.rounded,
    disabled && states.disabled,
    loading && states.loading
  );
}
