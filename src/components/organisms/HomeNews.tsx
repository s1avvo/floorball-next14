import Link from "next/link";
import { CustomButton } from "@ui/CustomButton";
import { NewsCard } from "@ui/NewsCard";
import { NewsClipItem } from "@ui/NewsClipItem";

import { getNewsFirst } from "@/api/getNews";

export const HomeNews = async () => {
	const news = await getNewsFirst(4);

	if (!news || news.length === 0) {
		return;
	}

	return (
		<section
			id="recent-news"
			className="relative grid grid-cols-1 items-start justify-items-end gap-4 overflow-hidden px-2 pb-4 pt-4 sm:px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-8 lg:pb-0"
		>
			<article className="row-span-2 max-w-sm px-6 py-2 text-end sm:px-8 sm:py-8 md:row-span-4" data-aos-id-home-news>
				<h2 className="mb-8 text-3xl text-heading drop-shadow-lg xs:text-4xl" data-aos="fade-up">
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
				<NewsCard
					key={item.id}
					slug={item.slug}
					image={item.image.responsiveImage!}
					delay={`${(index + 1) * 200 + 400}`}
					anchor="[data-aos-id-home-news]"
				>
					<NewsClipItem news={item} />
				</NewsCard>
			))}
		</section>
	);
};
