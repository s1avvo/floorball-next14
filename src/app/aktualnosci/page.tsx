import { getNewsWithPagination, getNewsCount } from "@/app/api/getNews";
import { NewsList } from "@ui/NewsList";

const INITIAL_NUMBER_OF_NEWS = 4;

export default async function NewsMain() {
	const initialNews = await getNewsWithPagination(INITIAL_NUMBER_OF_NEWS, 0);
	const count = await getNewsCount();

	return <NewsList initialNews={initialNews} countNews={count} />;
}
