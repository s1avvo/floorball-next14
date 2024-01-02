import { type MetadataRoute } from 'next';
import { getNewsAll } from "@/app/api/getNews";

 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const news = await getNewsAll();

    const newsEntries: MetadataRoute.Sitemap = news.map(article => ({
        url: `https://floorballsrem.com/article/${article.id}`,
        lastModified: new Date(article.updatedAt)
    }))

    return [
        {
            url: 'https://floorballsrem.com/',
            priority: 1,
        },
        {
            url: 'https://floorballsrem.com/#news',
        },
        ...newsEntries,
        {
            url: 'https://floorballsrem.com/#trening',
        },
        {
            url: 'https://floorballsrem.com/#contact',
        },
    ]
}