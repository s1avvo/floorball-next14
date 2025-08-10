import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	eslint: {
		ignoreDuringBuilds: true,
	},

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
