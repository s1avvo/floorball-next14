import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

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
				<main className="flex h-full w-full flex-col">{children}</main>
				{/*<Footer />*/}
			</body>
		</html>
	);
}
