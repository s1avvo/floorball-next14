import { notFound } from "next/navigation";
import React, { type ComponentType } from "react";

export const generateStaticParams = () => {
	return [{ filename: "polityka-prywatnosci" }];
};

export default async function StaticPage({ params }: { params: { filename: string } }) {
	const Page = await import(`./${params.filename}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound(),
	);
	return (
		<article className="prose prose-sm max-w-none px-6 text-start tracking-tight sm:prose-base sm:text-justify">
			<Page />
		</article>
	);
}
