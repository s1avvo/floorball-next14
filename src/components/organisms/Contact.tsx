import NextImage from "next/image";
import { ContactForm } from "@/components/molecules/ContactForm";

export const Contact = () => {
	return (
		<section
			className="relative flex h-full w-full flex-col justify-center px-4 py-10 sm:px-10 xl:px-48"
			id="contact"
		>
			<div className="justify-between space-y-5 sm:flex sm:space-y-0">
				<div className="basis-2/3 border-r-4 border-amber-400 px-2 sm:px-4">
					<h4 className="mb-8 text-end text-6xl font-extrabold">O NAS</h4>
					<div className="relative h-36 md:h-72">
						<NextImage
							fill
							alt="img"
							src={"/assets/unihokej-12.webp"}
							sizes="(max-width: 480px) 100vw,
                				(max-width: 768px) 75vw,
                				(max-width: 1060px) 50vw,
               			 		33vw"
							style={{
								objectFit: "cover",
								borderRadius: "0.375rem",
								objectPosition: "top right",
							}}
						/>
					</div>
					<p className="prose-sm py-2 md:py-4">
						Klub powstał w 2020 roku, a założony został przez pasjonatów unihokeja, którzy spotkali
						się po blisko 20 latach i postanowili, że wznowią treningi. Do roku 1999 sekcje
						unihokeja w Śremie prowadził Trener Eugeniusz Kaczmarek i to on ukształtował obecnych
						założycieli klubu. Dwa lata później powstała idea, aby kontynuować pracę trenera
						Kaczmarka i reaktywować nauczanie gry najmłodszych zawodników.
					</p>
				</div>
				<div className="mb-4 basis-1/3 px-4">
					<div className="mb-8 text-start text-6xl font-extrabold">KONTAKT</div>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};
