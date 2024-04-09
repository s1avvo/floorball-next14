import Link from "next/link";
import { NewsCard } from "@ui/NewsCard";
import { CustomButton } from "@ui/CustomButton";

import { getNewsFirst } from "@/api/getNews";

export const HomeNews = async () => {
	const news = await getNewsFirst(2);

	if (!news || news.length === 0) {
		return;
	}

	return (
		<section
			id="recent-news"
			className="relative grid grid-cols-1 justify-items-end gap-4 overflow-hidden px-2 py-2 sm:px-4 sm:py-12 md:grid-cols-2 lg:grid-cols-3"
		>
			<article className="row-span-1 max-w-sm px-6 py-2 text-end sm:px-8 sm:py-8 md:row-span-2">
				<h2 className="mb-8 text-4xl text-heading" data-aos="fade-up">
					Co słychać <br />w klubie?
				</h2>
				<hr className="mb-4 ml-auto h-1 max-w-20 bg-accent text-accent" data-aos="fade-up" data-aos-delay="200" />
				<p className="mb-4 text-base text-paragraph" data-aos="fade-up" data-aos-delay="400">
					Śledź naszą stronę oraz media społecznościowe, aby być na bieżąco z najnowszymi informacjami, relacjami z
					wydarzeń klubowych oraz ciekawostkami ze świata unihokeja.
				</p>
				<p className="mb-4 text-base text-paragraph" data-aos="fade-up" data-aos-delay="600">
					Dołącz do naszej społeczności i nie przegap żadnych aktualności, które przygotowujemy specjalnie dla Ciebie!
				</p>
				<Link href={"/aktualnosci"}>
					<CustomButton size="small" data-aos="fade-zoom-in" data-aos-delay="1200" data-aos-offset="0">
						#Aktulności
					</CustomButton>
				</Link>
			</article>
			{news.map((item, index) => (
				<NewsCard key={item.id} news={item} delay={`${(index + 1) * 200}`} />
			))}
		</section>
	);
};
