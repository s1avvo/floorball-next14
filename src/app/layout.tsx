import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { Providers } from "@/theme/providers";

const montserrat = Montserrat({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
	title: "Unihokej | Floorball Śrem",
	description: "Śremski Klub Unihokeja - Floorball Śrem",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl" suppressHydrationWarning>
			<body
				className={`${montserrat.className} bg-white text-blue-950 dark:bg-dark dark:text-white`}
			>
				<Providers>
					<Header />
					<main className="flex h-full w-full flex-col">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
