import { Suspense } from "react";
import { type Metadata } from "next";
import { Contact } from "@ui/Contact";
import { ContactList } from "@ui/ContactList";
import { Loading } from "@ui/Loading";
import { contactJsonLd } from "@/constants/jsonLd";

export function generateMetadata(): Metadata {
	return {
		title: "Floorball Śrem | Kontakt: Skontaktuj się z nami!",
		description:
			"Chciałbyś się z nami skontaktować w sprawie członkostwa, treningów czy współpracy - jesteśmy do Twojej dyspozycji. Telefon: 530 845 474",
		alternates: {
			canonical: "/kontakt",
		},
	};
}

export default async function ContactMain() {
	return (
		<>
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
			/>

			<div className="relative">
				<div className="absolute left-0 top-0 h-24 w-full rounded-none bg-linear-to-b from-paragraph/15 via-paragraph/5 to-paragraph/0 sm:rounded-xl" />
				<div className="absolute left-0 top-0 h-24 w-full rounded-none bg-linear-to-l from-background to-background/0 sm:rounded-xl" />

				<Contact />

				<aside className="p-4 sm:p-12" data-aos="fade">
					<div className="mx-auto max-w-lg">
						<h4 className="mb-8 text-center text-2xl text-secondary">Kontakt do trenerów</h4>
						<p className="mb-8 text-center text-base text-cardparagraph">
							Chcesz dowiedzieć się więcej o naszych metodach treningowych? Zawsze możesz porozmawiać z trenerami, aby
							uzyskać więcej informacji!
						</p>
					</div>

					<Suspense fallback={<Loading />}>
						<ContactList />
					</Suspense>
				</aside>
			</div>
		</>
	);
}
