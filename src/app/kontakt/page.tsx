import { Image as DatoImage } from "react-datocms";
import { ContactForm } from "@ui/ContactForm";
import { ContactTrainerCard } from "@ui/ContactTrainerCard";
import { contactStructuredData } from "@/constants/structuredData ";

import { getTrainersList } from "@api/getTrainer";
import { getPageImagesList } from "@api/getPageImage";

export default async function ContactMain() {
	const trainers = await getTrainersList();
	const contactImages = await getPageImagesList("Kontakt");

	return (
		<>
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
			/>

			<div className="relative">
				<div className="absolute left-0 top-0 h-24 w-full rounded-none bg-gradient-to-b from-paragraph/15 via-paragraph/5 to-paragraph/0 sm:rounded-xl" />
				<div className="absolute left-0 top-0 h-24 w-full rounded-none bg-gradient-to-l from-background to-background/0 sm:rounded-xl" />

				<section className="flex-row-reverse gap-4 md:flex">
					<div className="h-64 w-full self-end overflow-hidden rounded-none shadow-lg sm:rounded-xl md:h-[937px] md:w-1/2">
						<DatoImage
							data={contactImages[0].headerImage.responsiveImage!}
							layout="responsive"
							objectFit="cover"
							style={{
								height: "100%",
							}}
						/>
					</div>
					<div className="p-8 sm:p-12 md:w-1/2" data-aos-id-contact>
						<h1 className="mb-8 text-3xl text-secondary drop-shadow-md lg:text-4xl xl:text-5xl" data-aos="fade-up">
							Masz pytania? Skontaktuj się <br />z Nami
						</h1>
						<p className="prose mb-8 text-base text-cardparagraph" data-aos="fade-up" data-aos-delay="200">
							Chciałbyś się z nami skontaktować w sprawie członkostwa, treningów czy współpracy, jesteśmy do Twojej
							dyspozycji. Poniżej znajdziesz formularz kontaktowe lub telefon.
						</p>
						<div data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-contact]">
							<ContactForm />
						</div>
					</div>
				</section>

				<aside className="p-4 sm:p-12" data-aos="fade">
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
		</>
	);
}
