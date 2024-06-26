import { type Metadata } from "next";
import { Suspense } from "react";
import { Training } from "@ui/Training";
import { TrainingList } from "@ui/TrainingList";
import { TrainingGallery } from "@ui/TrainingGallery";
import { Loading } from "@ui/Loading";
import { trainingJsonLd } from "@/constants/jsonLd";

export function generateMetadata(): Metadata {
	return {
		title: "Floorball Śrem | Treningi: harmonogram oraz galeria zdjęć z treningu.",
		description:
			"Zobacz harmonogram treningów dla różnych grup wiekowych i weź udział w naszych zjęciach, które odbywają się regularnie w Hali Sportowej w Śremie, przy ul. Staszica 1a.",
		alternates: {
			canonical: "/treningi",
		},
	};
}

export default async function TrainingPage() {
	return (
		<>
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingJsonLd) }}
			/>

			<div className="relative">
				<div className="absolute left-0 top-0 h-24 w-full rounded-none bg-gradient-to-b from-paragraph/15 via-paragraph/5 to-paragraph/0 sm:rounded-xl" />
				<div className="absolute left-0 top-0 h-24 w-full rounded-none bg-gradient-to-l from-background to-background/0 sm:rounded-xl" />

				<Training />

				<Suspense fallback={<Loading />}>
					<TrainingList />
				</Suspense>

				<Suspense fallback={<Loading />}>
					<TrainingGallery />
				</Suspense>
			</div>
		</>
	);
}
