import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  value: number;
  className?: string;
}

export function ProgressBar({ value, className }: ProgressBarProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">Course Progress</span>
        <span className="text-sm font-medium text-primary">{Math.round(value)}%</span>
      </div>
      <Progress value={value} className="h-3" />
    </div>
  );
}
