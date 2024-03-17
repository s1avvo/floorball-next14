import React from "react";
import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import { Roboto } from "next/font/google";
import { Header } from "@ui/Header";
import "./globals.css";
import { Footer } from "@ui/Footer";

const roboto = Roboto({
	subsets: ["latin", "latin-ext"],
	weight: ["100", "300", "500", "900"],
	variable: "--font-roboto",
});

export const viewport: Viewport = {
	colorScheme: "dark light",
};

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
		site: "https://floorballsrem.com",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={`${roboto.className} bg-background`}>
				<Header />
				<main className="mx-auto mb-8 max-w-md space-y-8 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">{children}</main>
				<Footer />
				<Toaster position="bottom-left" expand closeButton />
			</body>
		</html>
	);
}
