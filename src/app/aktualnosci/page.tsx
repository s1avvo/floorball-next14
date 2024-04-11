import { Suspense } from "react";
import { type Metadata } from "next";
import { NewsList } from "@ui/NewsList";
import { newsJsonLd } from "@/constants/jsonLd";

import { getNewsWithPagination, getNewsCount } from "@/api/getNews";

const INITIAL_NUMBER_OF_NEWS = 4;

export function generateMetadata(): Metadata {
	return {
		title: "Floorball Śrem - aktualności...",
		description:
			"Śledź naszą stronę internetwą, aby być na bieżąco z najnowszymi informacjami, relacjami z wydarzeń klubowych oraz ciekawostkami ze świata unihokeja.",
		alternates: {
			canonical: "/aktualnosci",
		},
	};
}

export default async function NewsMain() {
	const initialNews = await getNewsWithPagination(INITIAL_NUMBER_OF_NEWS, 0);
	const count = await getNewsCount();

	return (
		<>
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(newsJsonLd(initialNews)) }}
			/>

			<section className="grid grid-cols-1 gap-4 px-2 sm:px-0 md:col-span-2 md:grid-cols-2" data-aos-id-news>
				<Suspense fallback={<div className="mx-auto">Loading...</div>}>
					<NewsList initialNews={initialNews} countNews={count} />
				</Suspense>
			</section>
		</>
	);
}
