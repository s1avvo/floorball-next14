import { type Metadata } from "next";
import { MessageSquareQuote } from "lucide-react";
import { LucideIconWithText } from "@ui/LucideIconWithText";
import { AboutUs } from "@ui/AboutUs";
import { aboutUsJsonLd } from "@/constants/jsonLd";

export function generateMetadata(): Metadata {
	return {
		title: "Floorball Śrem | O nas: poznaj historię i cele naszego klubu unihokeja.",
		description:
			"Dowiedz się więcej o naszym klubie, jego historii i inspiracjach, które doprowadziły do reaktywacji Śremskiego Klubu Unihokeja. Zapraszamy do współpracy!",
		alternates: {
			canonical: "/onas",
		},
	};
}

export default function AboutUsMain() {
	return (
		<>
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutUsJsonLd) }}
			/>

			<div className="relative">
				<div className="absolute left-0 top-0 h-24 w-full rounded-none bg-gradient-to-b from-paragraph/15 via-paragraph/5 to-paragraph/0 sm:rounded-xl" />
				<div className="absolute left-0 top-0 h-24 w-full rounded-none bg-gradient-to-l from-background to-background/0 sm:rounded-xl" />

				<AboutUs />

				<aside className="mt-8 p-4 text-center sm:p-12" data-aos="fade">
					<LucideIconWithText Icon={MessageSquareQuote} size={72}>
						<div className="max-w-xl text-sm italic text-accent sm:text-lg">
							Cena sukcesu to ciężka praca, poświęcenie i determinacja, by niezależnie od tego, czy w danej chwili
							wygrywamy czy przegrywamy dawać z siebie wszystko.
						</div>
					</LucideIconWithText>
				</aside>
			</div>
		</>
	);
}
