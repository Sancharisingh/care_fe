import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import CareIcon, { IconName } from "@/CAREUI/icons/CareIcon";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:focus:ring-gray-300",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gray-900 text-gray-50 shadow hover:bg-gray-900/80 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80",
        secondary:
          "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
        destructive:
          "border-transparent bg-red-500 text-gray-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/80",
        warning:
          "border-transparent bg-yellow-400 text-gray-900 shadow hover:bg-yellow-500 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500",
        outline: "text-gray-950 dark:text-gray-50",
        primary:
          "border-transparent bg-green-500 text-gray-50 shadow hover:bg-green-500/80 dark:bg-green-900 dark:text-gray-50 dark:hover:bg-green-900/80",
        custom: "",
      },
      size: {
        small: "rounded px-2 py-1 text-xs",
        medium: "rounded-lg px-3 py-2 text-xs",
        large: "rounded-lg px-4 py-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  startIcon?: IconName;
  endIcon?: IconName;
  tooltip?: string;
}

function Badge({
  className,
  variant,
  size,
  startIcon,
  endIcon,
  tooltip,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      role="status"
      aria-label={tooltip || children?.toString()}
      className={cn(badgeVariants({ variant, size }), className)}
      title={tooltip}
      {...props}
    >
      {startIcon && <CareIcon icon={startIcon} className="mr-1" />}
      <span>{children}</span>
      {endIcon && <CareIcon icon={endIcon} className="ml-1" />}
    </div>
  );
}

export { Badge, badgeVariants };
