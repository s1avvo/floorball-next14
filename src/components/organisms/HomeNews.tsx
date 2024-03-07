import Link from "next/link";
import { NewsCard } from "@ui/NewsCard";
import { CustomButton } from "@ui/CustomButton";
import { getNewsFirst } from "@/app/api/getNews";

export const HomeNews = async () => {
	const news = await getNewsFirst(2);

	if (!news || news.length === 0) {
		return;
	}

	return (
		<section className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			<div className="text-end">
				<h2 className="mb-8 text-4xl text-heading">
					Co słychać <br />w klubie?
				</h2>
				<p className="prose mb-4 text-base text-paragraph">
					Śledź naszą stronę oraz media społecznościowe, aby być na bieżąco z najnowszymi informacjami, relacjami z
					wydarzeń klubowych oraz ciekawostkami ze świata unihokeja.
				</p>
				<Link href={"/aktualnosci"}>
					<CustomButton size="small">#Aktulności</CustomButton>
				</Link>
			</div>

			{news.map((item) => (
				<NewsCard key={item.id} news={item} />
			))}
		</section>
	);
};
