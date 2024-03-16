import { Suspense } from "react";
import { NewsList } from "@ui/NewsList";
import { getNewsWithPagination, getNewsCount } from "@/app/api/getNews";

const INITIAL_NUMBER_OF_NEWS = 4;

export default async function NewsMain() {
	const initialNews = await getNewsWithPagination(INITIAL_NUMBER_OF_NEWS, 0);
	const count = await getNewsCount();

	return (
		<section className="grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-2">
			<Suspense fallback={<div>Loading...</div>}>
				<NewsList initialNews={initialNews} countNews={count} />
			</Suspense>
		</section>
	);
}
