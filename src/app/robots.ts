import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: [
				`${process.env.NEXT_PUBLIC_URL}/api/draft`,
				`${process.env.NEXT_PUBLIC_URL}/api/og`,
				`${process.env.NEXT_PUBLIC_URL}/api/revalidate`,
				`${process.env.NEXT_PUBLIC_URL}/polityka-prywatnosci`,
			],
		},
		sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
	};
}
