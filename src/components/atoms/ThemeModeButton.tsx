"use client";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

enum ThemeMode {
	DARK = "dark",
	LIGHT = "light",
}

export const ThemeModeButton = () => {
	const [theme, setTheme] = useState<ThemeMode>(ThemeMode.DARK);

	return (
		<>
			{theme === ThemeMode.LIGHT && (
				<SunIcon
					width={18}
					height={18}
					className="box-content cursor-pointer rounded-full bg-neutral-100 p-1 text-amber-400"
					onClick={() => setTheme(ThemeMode.DARK)}
				/>
			)}
			{theme === ThemeMode.DARK && (
				<MoonIcon
					width={18}
					height={18}
					className="box-content cursor-pointer rounded-full bg-blue-950 p-1 text-neutral-100"
					onClick={() => setTheme(ThemeMode.LIGHT)}
				/>
			)}
		</>
	);
};
