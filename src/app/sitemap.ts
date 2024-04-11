import { type MetadataRoute } from "next";
import { getNewsSlug } from "@/api/getNews";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const news = await getNewsSlug();

	const newsEntries: MetadataRoute.Sitemap = news.map((article) => ({
		url: `${process.env.NEXT_PUBLIC_URL}/aktualnosci/${article.slug}`,
	}));

	return [
		{
			url: `${process.env.NEXT_PUBLIC_URL}`,
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_URL}/onas`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_URL}/treningi`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_URL}/aktualnosci`,
		},
		...newsEntries,
		{
			url: `${process.env.NEXT_PUBLIC_URL}/kontakt`,
		},
	];
}
