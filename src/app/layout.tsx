import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { Providers } from "@/theme/providers";

const montserrat = Montserrat({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://floorballsrem.com"),
	title: {
		default: "Unihokej | Floorball Śrem",
		template: "Unihokej | Floorball Śrem - %s",
	},
	description:
		"Śremski Klub Unihokeja powstał w 2020 roku, a założony został przez pasjonatów unihokeja, którzy spotkali się po blisko 20 latach i postanowili, że wznowią treningi.",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Unihokej | Floorball Śrem",
		description:
			"Śremski Klub Unihokeja - klub pasjonatów unihokeja. Zapraszamy dziciaki z 1 oraz 2 klasy Szkoły Podstawowej na treningi Unihokeja",
		url: "https://floorballsrem.com",
		siteName: "floorballsrem.com",
		locale: "pl",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
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
