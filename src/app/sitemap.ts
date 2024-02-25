import { type MetadataRoute } from "next";
import { getNewsSlug } from "@/app/api/getNews";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const news = await getNewsSlug();

	const newsEntries: MetadataRoute.Sitemap = news.map((article) => ({
		url: `${process.env.NEXT_PUBLIC_URL}/article/${article.slug}`,
	}));

	return [
		{
			url: `${process.env.NEXT_PUBLIC_URL}`,
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_URL}/#news`,
		},
		...newsEntries,
		{
			url: `${process.env.NEXT_PUBLIC_URL}/#trening`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_URL}/#contact`,
		},
	];
}
