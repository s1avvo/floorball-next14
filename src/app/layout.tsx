import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/organisms/Header";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
	title: "Unihokej | Floorball Śrem",
	description: "Śremski Klub Unihokeja - Floorball Śrem",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<Header />
				<main className="flex min-h-screen flex-col items-center justify-between">{children}</main>
			</body>
		</html>
	);
}
