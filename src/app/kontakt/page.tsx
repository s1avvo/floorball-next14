import { Image as DatoImage } from "react-datocms";
import { ContactForm } from "@ui/ContactForm";
import { ContactTrainerCard } from "@ui/ContactTrainerCard";

import { getTrainersList } from "@api/getTrainer";
import { getPageImagesList } from "@api/getPageImage";

export default async function ContactMain() {
	const trainers = await getTrainersList();
	const contactImages = await getPageImagesList("Kontakt");

	return (
		<div className="space-y-12 p-4 sm:p-8">
			<section className="flex-row-reverse gap-10 md:flex">
				<div className="h-64 w-full self-end overflow-hidden rounded-xl shadow-lg md:h-[937px] md:w-1/2">
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
				<div className="mt-8 sm:mt-0 md:w-1/2">
					<h1 className="mb-8 text-3xl text-secondary drop-shadow-md lg:text-4xl xl:text-5xl">
						Masz pytania? Skontaktuj się <br />z Nami
					</h1>
					<p className="text-cardparagraph prose mb-8 text-base">
						Chciałbyś się z nami skontaktować w sprawie członkostwa, treningów czy współpracy, jesteśmy do Twojej
						dyspozycji. Poniżej znajdziesz formularz kontaktowe lub telefon.
					</p>
					<ContactForm />
				</div>
			</section>

			<aside>
				<div className="mx-auto max-w-lg">
					<h4 className="mb-8 text-center text-2xl text-secondary">Kontakt do trenerów</h4>
					<p className="text-cardparagraph mb-8 text-center text-base">
						Chcesz dowiedzieć się więcej o naszych metodach treningowych? Zawsze możesz porozmawiać z trenerami, aby
						uzyskać więcej informacji!
					</p>
				</div>
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
