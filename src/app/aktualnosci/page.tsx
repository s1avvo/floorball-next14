import { Suspense } from "react";
import { NewsList } from "@ui/NewsList";
import { newsStructuredData } from "@/constants/structuredData ";

import { getNewsWithPagination, getNewsCount } from "@/app/api/getNews";

const INITIAL_NUMBER_OF_NEWS = 4;

export default async function NewsMain() {
	const initialNews = await getNewsWithPagination(INITIAL_NUMBER_OF_NEWS, 0);
	const count = await getNewsCount();

	return (
		<>
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(newsStructuredData(initialNews)) }}
			/>
			<section className="grid grid-cols-1 gap-4 px-2 sm:px-0 md:col-span-2 md:grid-cols-2">
				<Suspense fallback={<div className="mx-auto">Loading...</div>}>
					<NewsList initialNews={initialNews} countNews={count} />
				</Suspense>
			</section>
		</>
	);
}
