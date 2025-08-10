import React from "react";
import { clsx } from "clsx";
import { type LucideIcon } from "lucide-react";

export const LucideIconWithText = ({
	children,
	Icon,
	size,
	isReversed = false,
	style,
}: {
	children: React.ReactNode;
	Icon: LucideIcon;
	size: number;
	isReversed?: boolean;
	style?: string;
}) => {
	return (
		<button className={clsx("inline-flex items-center gap-2", `${isReversed && "flex-row-reverse"}`)}>
			{<Icon className={clsx("shrink-0", `${style}`)} size={size} strokeWidth={2} />}
			{children}
		</button>
	);
};
