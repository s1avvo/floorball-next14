import React from "react";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	size: "regular" | "small" | "circle";
}

export const CustomButton = ({ children, size = "regular", ...rest }: ButtonProps) => {
	return (
		<button
			className={clsx(
				"rounded-full bg-accent text-heading",
				`${size === "regular" && "px-16 py-2 text-lg"}`,
				`${size === "small" && "px-3 text-base"}`,
				`${size === "circle" && "text-base"}`,
			)}
			{...rest}
		>
			{children}
		</button>
	);
};
