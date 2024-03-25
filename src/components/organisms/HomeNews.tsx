import Link from "next/link";
import { NewsCard } from "@ui/NewsCard";
import { CustomButton } from "@ui/CustomButton";

import { getNewsFirst } from "@api/getNews";

export const HomeNews = async () => {
	const news = await getNewsFirst(2);

	if (!news || news.length === 0) {
		return;
	}

	return (
		<section className="relative z-10 grid grid-cols-1 justify-items-end gap-4 overflow-hidden p-2 sm:p-4 md:grid-cols-2 lg:grid-cols-3">
			<article className="row-span-1 max-w-sm p-6 text-end sm:p-8 md:row-span-2">
				<h2 className="mb-12 text-4xl text-heading">
					Co słychać <br />w klubie?
				</h2>
				<p className="mb-4 text-base text-paragraph">
					Śledź naszą stronę oraz media społecznościowe, aby być na bieżąco z najnowszymi informacjami, relacjami z
					wydarzeń klubowych oraz ciekawostkami ze świata unihokeja.
				</p>
				<p className="mb-4 text-base text-paragraph">
					Dołącz do naszej społeczności i nie przegap żadnych aktualności, które przygotowujemy specjalnie dla Ciebie!
				</p>
				<Link href={"/aktualnosci"}>
					<CustomButton size="small">#Aktulności</CustomButton>
				</Link>
			</article>

			{news.map((item) => (
				<NewsCard key={item.id} news={item} />
			))}
		</section>
	);
};
