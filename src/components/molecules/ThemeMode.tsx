"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeButton } from "@/components/atoms/ThemeButton";

enum ThemeModeOption {
	DARK = "dark",
	LIGHT = "light",
}

export const ThemeMode = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
			{theme === ThemeModeOption.LIGHT && (
				<ThemeButton
					// isActive={mounted && theme === ThemeModeOption.LIGHT}
					onClick={() => setTheme(ThemeModeOption.DARK)}
				>
					<SunIcon width={18} height={18} />
				</ThemeButton>
			)}
			{theme === ThemeModeOption.DARK && (
				<ThemeButton
					// isActive={mounted && theme === ThemeModeOption.DARK}
					onClick={() => setTheme(ThemeModeOption.LIGHT)}
				>
					<MoonIcon width={18} height={18} />
				</ThemeButton>
			)}
		</>
	);
};
