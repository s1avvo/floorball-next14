import React from "react";
import { clsx } from "clsx";

type ThemeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	isActive?: boolean;
};

export const ThemeButton = ({ children, isActive, ...rest }: ThemeButtonProps) => {
	return (
		<button
			type="button"
			{...rest}
			className={clsx(
				"inline-block rounded-full bg-white p-1 text-amber-400 dark:bg-[#000728] dark:text-neutral-100",
				`${isActive && "bg-neutral-400 dark:bg-blue-950"}`,
			)}
		>
			{children}
		</button>
	);
};
