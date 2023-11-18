// import { DocumentIcon } from "@heroicons/react/24/solid";

export const Footer = () => {
	return (
		<footer id="footer">
			<hr className="border-2 border-white dark:border-dark" />
			<div className="flex w-full items-center justify-center bg-primary px-2 py-2 text-center font-light text-white sm:px-4 md:px-10 xl:px-48">
				<p>Floorball Śrem &copy;2023</p>

				{/*<span className="flex justify-end gap-2">*/}
				{/*	Do pobrania*/}
				{/*	<DocumentIcon height={24} width={24} />*/}
				{/*</span>*/}
			</div>
		</footer>
	);
};
