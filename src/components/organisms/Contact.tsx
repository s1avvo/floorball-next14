import { ContactSection } from "@ui/ContactSection";
import { getPageImagesList } from "@/api/getPageImage";

export const Contact = async () => {
	const contactImages = await getPageImagesList("Kontakt");

	return (
		<>
			<section className="flex-row-reverse gap-4 md:flex">
				<ContactSection
					title={
						<h1
							className="mb-8 text-3xl text-secondary drop-shadow-md lg:text-4xl"
							data-aos="fade-up"
							data-aos-id-contact
						>
							Masz pytania? Skontaktuj się <br className="hidden lg:inline-block" />z Nami
						</h1>
					}
					paragraphs={[
						"Chciałbyś się z nami skontaktować w sprawie członkostwa, treningów czy współpracy, jesteśmy do Twojej dyspozycji. Poniżej znajdziesz formularz kontaktowe lub telefon.",
					]}
					image={contactImages[0].headerImage.responsiveImage}
				/>
			</section>
		</>
	);
};
