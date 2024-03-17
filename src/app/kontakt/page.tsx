import Image from "next/image";
import { ContactForm } from "@ui/ContactForm";
import { ContactTrainerCard } from "@ui/ContactTrainerCard";
import { getTrainersList } from "@/app/api/getTrainer";

export default async function ContactMain() {
	const trainers = await getTrainersList();

	return (
		<div className="space-y-12 p-4 sm:p-8">
			<section className="flex-row-reverse gap-10 md:flex">
				<div className="relative h-96 w-full self-end bg-heading shadow-lg md:h-[937px] md:w-1/2">
					<Image
						fill
						src={"https://www.datocms-assets.com/120233/1710672737-contact_img.webp"}
						alt="Floorball Śrem Trening"
						quality={90}
						priority
						sizes="(min-width: 1360px) 588px, (min-width: 1040px) calc(40vw + 52px), (min-width: 960px) 376px, (min-width: 780px) calc(36.25vw + 35px), (min-width: 640px) calc(13.33vw + 163px), (min-width: 480px) 416px, 92.5vw"
						style={{
							height: "100%",
							aspectRatio: "1/1",
							objectFit: "cover",
							overflow: "hidden",
							objectPosition: "center",
							borderRadius: "10px",
						}}
					/>
				</div>
				<div className="md:w-1/2">
					<h1 className="mb-8 text-4xl text-secondary drop-shadow-md sm:text-5xl">
						Masz pytania? Skontaktuj się z Nami
					</h1>
					<p className="prose mb-8 text-base text-black">
						Chciałbyś się z nami skontaktować w sprawie członkostwa, treningów czy współpracy, jesteśmy do Twojej
						dyspozycji. Poniżej znajdziesz formularz kontaktowe lub telefon.
					</p>
					<ContactForm />
				</div>
			</section>

			<aside>
				<h4 className="mb-8 text-center text-2xl text-secondary">Kontakt do trenerów</h4>
				<ul className="flex flex-wrap justify-between">
					{trainers.map((item) => (
						<li key={item.id} className="mb-4 border-s-2 border-accent px-4 py-2 sm:mx-auto">
							<ContactTrainerCard name={item.name} phone={item.phoneNumber} />
						</li>
					))}
				</ul>
			</aside>
		</div>
	);
}
