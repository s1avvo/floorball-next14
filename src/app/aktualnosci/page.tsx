import Link from "next/link";
import { Suspense } from "react";
import { CustomButton } from "@ui/CustomButton";
import { NewsList } from "@ui/NewsList";
import { Stick } from "@ui/Stick";
import { getNewsWithPagination, getNewsCount } from "@/app/api/getNews";

const INITIAL_NUMBER_OF_NEWS = 4;

export default async function NewsMain() {
	const initialNews = await getNewsWithPagination(INITIAL_NUMBER_OF_NEWS, 0);
	const count = await getNewsCount();

	return (
		<div className="grid grid-cols-1 gap-4 rounded-xl bg-primary p-4 sm:p-8 md:grid-cols-2 lg:grid-cols-3">
			<div className="flex flex-col items-end justify-between">
				<div className="text-end">
					<h2 className="mb-8 text-4xl text-heading">
						Co słychać <br />w klubie?
					</h2>
					<p className="prose mb-4 text-base text-paragraph">
						Śledź naszą stronę oraz media społecznościowe, aby być na bieżąco z najnowszymi informacjami, relacjami z
						wydarzeń klubowych oraz ciekawostkami ze świata unihokeja.
					</p>
					<Link href={"/"}>
						<CustomButton size="small">#Home</CustomButton>
					</Link>
				</div>
				<Stick fill="#FF8906" height={550} width={200} className="hidden pb-10 lg:block" />
			</div>
			<section className="grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-2">
				<Suspense fallback={<div>Loading...</div>}>
					<NewsList initialNews={initialNews} countNews={count} />
				</Suspense>
			</section>
		</div>
	);
}
