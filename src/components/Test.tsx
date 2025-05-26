// src/components/Test.tsx
import type { PillProps } from "@/types";

const TestPill = ({ children, className }: PillProps) => (
  <div className={className}>{children}</div>
);

export default TestPill;
