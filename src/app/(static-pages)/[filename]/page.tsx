import { notFound } from "next/navigation";

export const dynamicParams = false

export const generateStaticParams = () => {
	return [{ filename: "polityka-prywatnosci"}];
};

export default async function StaticPage(props: { params: Promise<{ filename: string }> }) {
    const { filename } = await props.params;
	
	if (!filename) {
		return notFound();
	}

	const { default: Page } = await import(`./${filename}.mdx`)
    
    return (
		<article className="prose prose-sm max-w-none px-6 text-start tracking-tight sm:prose-base sm:text-justify">
			<Page />
		</article>
	);
}
