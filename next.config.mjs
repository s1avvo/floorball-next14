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
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});
export default withMDX(nextConfig);
