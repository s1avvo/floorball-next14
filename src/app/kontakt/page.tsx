import { Image as DatoImage } from "react-datocms";
import { ContactForm } from "@ui/ContactForm";
import { ContactTrainerCard } from "@ui/ContactTrainerCard";

import { getTrainersList } from "@api/getTrainer";
import { getPageImagesList } from "@api/getPageImage";

export default async function ContactMain() {
	const trainers = await getTrainersList();
	const contactImages = await getPageImagesList("Kontakt");

	return (
		<div className="relative">
			<div className="absolute left-0 top-0 h-24 w-full rounded-xl bg-gradient-to-b from-paragraph/15 via-paragraph/5 to-paragraph/0" />
			<div className="absolute left-0 top-0 h-24 w-full rounded-xl bg-gradient-to-l from-background to-background/0" />

			<section className="flex-row-reverse gap-4 md:flex">
				<div className="h-64 w-full self-end overflow-hidden rounded-none shadow-lg sm:rounded-xl md:h-[937px] md:w-1/2">
					<DatoImage
						data={contactImages[0].headerImage.responsiveImage!}
						layout="responsive"
						objectFit="cover"
						priority
						style={{
							height: "100%",
						}}
					/>
				</div>
				<div className="p-8 sm:p-12 md:w-1/2">
					<h1 className="mb-8 text-3xl text-secondary drop-shadow-md lg:text-4xl xl:text-5xl">
						Masz pytania? Skontaktuj się <br />z Nami
					</h1>
					<p className="prose mb-8 text-base text-cardparagraph">
						Chciałbyś się z nami skontaktować w sprawie członkostwa, treningów czy współpracy, jesteśmy do Twojej
						dyspozycji. Poniżej znajdziesz formularz kontaktowe lub telefon.
					</p>
					<ContactForm />
				</div>
			</section>

			<aside className="p-4 sm:p-12">
				<div className="mx-auto max-w-lg">
					<h4 className="mb-8 text-center text-2xl text-secondary">Kontakt do trenerów</h4>
					<p className="mb-8 text-center text-base text-cardparagraph">
						Chcesz dowiedzieć się więcej o naszych metodach treningowych? Zawsze możesz porozmawiać z trenerami, aby
						uzyskać więcej informacji!
					</p>
				</div>
				<ul className="flex flex-wrap justify-between">
					{trainers.map((item) => (
						<li key={item.id} className="mb-2 border-s-2 border-accent px-4 sm:mx-auto">
							<ContactTrainerCard name={item.name} phone={item.phoneNumber} />
						</li>
					))}
				</ul>
			</aside>
		</div>
	);
}
