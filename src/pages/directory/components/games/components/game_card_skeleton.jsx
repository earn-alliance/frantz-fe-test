import { cn } from "../../../../../utils/cn_util";

export function GameCardSkeleton({ className, ...props }) {
	return (
		<div
			className={cn("animate-pulse rounded-md bg-primary/10 h-72", className)}
			{...props}
		/>
	);
}
