import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "ghost";
}

export function ButtonGroup({
  children,
  className,
  orientation = "horizontal",
  size = "default",
  variant = "default",
}: ButtonGroupProps) {
  return (
    <div
      className={cn(
        "inline-flex",
        orientation === "vertical" ? "flex-col" : "flex-row",
        {
          "space-x-0": orientation === "horizontal",
          "space-y-0": orientation === "vertical",
        },
        className
      )}
      role="group"
    >
      {children}
    </div>
  );
}

interface ButtonGroupItemProps {
  children: ReactNode;
  className?: string;
  isFirst?: boolean;
  isLast?: boolean;
  orientation?: "horizontal" | "vertical";
}

export function ButtonGroupItem({
  children,
  className,
  isFirst,
  isLast,
  orientation = "horizontal",
}: ButtonGroupItemProps) {
  return (
    <div
      className={cn(
        "relative",
        {
          "-ml-px": orientation === "horizontal" && !isFirst,
          "-mt-px": orientation === "vertical" && !isFirst,
          "rounded-l-none": orientation === "horizontal" && !isFirst,
          "rounded-r-none": orientation === "horizontal" && !isLast,
          "rounded-t-none": orientation === "vertical" && !isFirst,
          "rounded-b-none": orientation === "vertical" && !isLast,
        },
        className
      )}
    >
      {children}
    </div>
  );
} 