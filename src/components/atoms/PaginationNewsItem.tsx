import { type Route } from "next";
import { ActiveLink } from "@/components/atoms/ActiveLink";

type PaginationNewsProps = {
	currentPage: number;
	pages: number;
	href: Route<string>;
};

export const PaginationNewsItem = ({ currentPage, pages, href }: PaginationNewsProps) => {
	return (
		<>
			{Array.from({ length: pages }, (_, i) => i + 1).map((page) => {
				return (
					<li key={page}>
						<ActiveLink
							href={`${href}/${page}` as Route}
							className="p-3"
							activeClassName="font-semibold border-t-2 border-neutral-600 hover:text-neutral-800"
							exact
						>
							{page}
						</ActiveLink>
					</li>
				);
			})}
		</>
	);
};
