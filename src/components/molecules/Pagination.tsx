import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { type Route } from "next";
import { PaginationNewsItem } from "@/components/atoms/PaginationNewsItem";

type PaginationProps = {
	limit: number;
	currentPage: number;
	productsCount: number;
	href: Route<string>;
};
export const Pagination = async ({ productsCount, currentPage, limit, href }: PaginationProps) => {
	const pages = Math.ceil(productsCount / limit);

	return (
		<section>
			<nav>
				<ul className="mt-10 flex items-center justify-center gap-5" aria-label="pagination">
					{currentPage !== 1 && (
						<li key="prev">
							<Link
								href={`${href}/${currentPage - 1}` as Route}
								className="flex rounded-md bg-primary p-2"
							>
								<ChevronLeftIcon
									title="Previous page"
									aria-label="Previous page"
									className="h-5 w-5 cursor-pointer"
								/>
							</Link>
						</li>
					)}
					<PaginationNewsItem pages={pages} href={href} />
					{currentPage < pages && (
						<li key="next">
							<Link
								href={`${href}/${currentPage + 1}` as Route}
								className="flex rounded-md bg-primary p-2"
							>
								<ChevronRightIcon
									title="Next page"
									aria-label="Next page"
									className="h-5 w-5 cursor-pointer"
								/>
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</section>
	);
};
