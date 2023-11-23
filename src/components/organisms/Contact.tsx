import NextImage from "next/image";
import { ContactForm } from "@/components/molecules/ContactForm";
import { Ball } from "@/components/atoms/Ball";
import { ContactPersonCard } from "@/components/atoms/ContactPersonCard";

export const Contact = () => {
	return (
		<>
			<section
				className="relative flex h-full w-full flex-col justify-center px-2 py-10 xl:px-48"
				id="contact"
			>
				<div className="justify-between space-y-5 sm:flex sm:space-y-0">
					<div className="basis-2/3 border-r-4 border-amber-400 px-2 sm:px-4">
						<h4 className="mb-10 text-end text-6xl font-extrabold">O NAS</h4>
						<div className="grid-cols-3 grid-rows-3 gap-x-4 gap-y-4 sm:grid-rows-2 md:grid">
							<div className="col-span-1 row-span-2 hidden h-full w-full rounded-md md:block">
								<div className="flex h-full items-end justify-end">
									<Ball fill={"#fbbf24"} width={110} height={110} />
								</div>
							</div>
							<div className="col-span-2 row-span-2 h-full">
								<div className="relative h-48 md:h-72">
									<NextImage
										fill
										alt="img"
										src={"/assets/unihokej-contact.jpg"}
										sizes="(max-width: 480px) 100vw,
								(max-width: 768px) 75vw,
								(max-width: 1060px) 50vw,
								33vw"
										style={{
											objectFit: "cover",
											borderRadius: "0.375rem",
											objectPosition: "center",
										}}
									/>
								</div>
							</div>
							<div className="col-span-3 row-span-1">
								<p className="prose-sm py-2 md:py-4">
									Klub powstał w 2020 roku, a założony został przez pasjonatów unihokeja, którzy
									spotkali się po blisko 20 latach i postanowili, że wznowią treningi. Do roku 1999
									sekcje unihokeja w Śremie prowadził Trener Eugeniusz Kaczmarek i to on
									ukształtował obecnych założycieli klubu. Dwa lata później powstała idea, aby
									kontynuować pracę trenera Kaczmarka i reaktywować nauczanie gry najmłodszych
									zawodników.
								</p>
							</div>
						</div>
					</div>
					<div id="contact_form" className="mb-4 basis-1/3 px-4">
						<div className="mb-8 text-start text-6xl font-extrabold">KONTAKT</div>
						<ContactForm />
					</div>
				</div>
			</section>
			<section>
				<div className="relative border-t-2 border-secondary px-4 py-8 text-white dark:border-white md:px-10 xl:px-48">
					<span className="absolute -top-5 ms-2 rounded-md bg-white px-4 py-2 text-blue-950 sm:ms-0">
						<h3>Trenerzy:</h3>
					</span>
					<div className="flex flex-col items-start justify-between sm:flex-row">
						<ContactPersonCard src={"/assets/trener01.jpg"} name={"Arkadiusz Nadolny"} />
						<ContactPersonCard src={"/assets/trener02.jpg"} name={"Michał Formela"} />
						<ContactPersonCard src={"/assets/trener03.jpg"} name={"Mateusz Kaczmarek"} />
					</div>
				</div>
			</section>
		</>
	);
};
