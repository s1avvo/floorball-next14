import Link from "next/link";
import { NewsBackButton } from "@ui/NewsBackButton";
import { CustomButton } from "@ui/CustomButton";

export default function NotFound() {
	return (
		<section className="mb-12 rounded-xl bg-primary">
			<div className="container mx-auto flex min-h-[calc(100vh-100px)] max-w-md items-center">
				<div>
					<h2 className="text-lg font-medium text-accent">Błąd 404</h2>
					<h1 className="mt-3 text-2xl font-semibold text-heading md:text-3xl">Nie znaleziono strony</h1>
					<p className="mt-4 text-base text-paragraph">Przepraszamy, strona której szukasz nie istnieje.</p>

					<div className="mt-6 flex items-center gap-x-3">
						<NewsBackButton>Powrót</NewsBackButton>
						<Link href={`${process.env.NEXT_PUBLIC_URL}/`}>
							<CustomButton size="small">Strona główna</CustomButton>
						</Link>
					</div>

					<div className="mt-10">
						<h3 className="mb-4 text-lg text-heading">Zobacz nasze inne podstrony:</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href={`${process.env.NEXT_PUBLIC_URL}/onas`}
									className="inline-flex items-center gap-x-2 text-sm text-paragraph hover:underline"
								>
									<span>O nas</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="h-5 w-5 rtl:rotate-180"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
									</svg>
								</Link>
							</li>
							<li>
								<Link
									href={`${process.env.NEXT_PUBLIC_URL}/treningi`}
									className="inline-flex items-center gap-x-2 text-sm text-paragraph hover:underline"
								>
									<span>Treningi</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="h-5 w-5 rtl:rotate-180"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
									</svg>
								</Link>
							</li>
							<li>
								<Link
									href={`${process.env.NEXT_PUBLIC_URL}/aktualnosci`}
									className="inline-flex items-center gap-x-2 text-sm text-paragraph hover:underline"
								>
									<span>Aktualnośći</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="h-5 w-5 rtl:rotate-180"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
									</svg>
								</Link>
							</li>
							<li>
								<Link
									href={`${process.env.NEXT_PUBLIC_URL}/kontakt`}
									className="inline-flex items-center gap-x-2 text-sm text-paragraph hover:underline"
								>
									<span>Kontakt</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="h-5 w-5 rtl:rotate-180"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
									</svg>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
