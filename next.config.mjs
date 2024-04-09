import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.datocms-assets.com",
				pathname: "**",
			},
		],
	},

	experimental: {
		mdxRs: true,
	},
};

const withMDX = createMDX();
export default withMDX(nextConfig);
