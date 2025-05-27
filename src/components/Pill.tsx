import { PillProps } from "@/types";
import clsx from "clsx";
export default function Pill({ children, className = "", ...props }: PillProps) {
  return (
    <span
      className={clsx(
        "rounded-full bg-gray-100 text-gray-800 px-3 py-1 text-sm font-medium",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
