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
});

export const viewport: Viewport = {
	colorScheme: "dark light",
};

export const metadata: Metadata = {
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
	title: "Floorball Śrem - Śremski Klub Unihokeja",
	description:
		"Floorball Śrem to dynamicznie rozwijający się klub unihokeja, który promuje aktywny styl życia i rozwój młodych talentów. Dołącz do nas i odkryj pasjonujący świat unihokeja!",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Floorball Śrem - Śremski Klub Unihokeja",
		description: "Floorball Śrem - Śremski Klub Unihokeja. Dołącz do nas i odkryj pasjonujący świat unihokeja!",
		url: `${process.env.NEXT_PUBLIC_URL}`,
		images: [
			{
				url: `${process.env.OPEN_GRAPH_IMAGE}`,
				width: 1200,
				height: 630,
				alt: "Floorball Śrem - Śremski Klub Unihokeja",
			},
		],
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
				<main className="mx-auto max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">{children}</main>
				<Footer />
				<Toaster position="bottom-left" expand closeButton />
			</body>
		</html>
	);
}
