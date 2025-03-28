"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { cn } from "../utils/cn_util";
import { toggleVariants } from "./toggle";

const ToggleGroupContext = React.createContext({
	size: "default",
	variant: "default",
});

export const ToggleGroup = React.forwardRef(
	({ className, variant, size, children, ...props }, ref) => (
		<ToggleGroupPrimitive.Root
			ref={ref}
			className={cn(
				"flex items-center justify-center gap-1 w-full border border-input rounded-lg p-1",
				className,
			)}
			{...props}
		>
			<ToggleGroupContext.Provider value={{ variant, size }}>
				{children}
			</ToggleGroupContext.Provider>
		</ToggleGroupPrimitive.Root>
	),
);

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

export const ToggleGroupItem = React.forwardRef(
	({ className, children, variant, size, ...props }, ref) => {
		const context = React.useContext(ToggleGroupContext);

		return (
			<ToggleGroupPrimitive.Item
				ref={ref}
				className={cn(
					toggleVariants({
						variant: context.variant || variant,
						size: context.size || size,
					}),
					className,
				)}
				{...props}
			>
				{children}
			</ToggleGroupPrimitive.Item>
		);
	},
);

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
