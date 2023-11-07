import { ContactForm } from "@/components/molecules/ContactForm";

export const Contact = () => {
	return (
		<section className="relative flex h-full min-h-screen w-full flex-col bg-blue-950" id="contact">
			<div className="flex h-full min-h-screen w-full flex-col  px-10 pt-28 sm:px-20 xl:px-48">
				<div className="mb-16 ps-40 text-3xl font-semibold text-neutral-100 sm:ps-20 sm:text-5xl xl:ps-56 xl:text-8xl">
					KONTAKT
				</div>
				<div className="flex justify-between gap-8">
					<div className="h-96 basis-2/3">
						<ContactForm />
					</div>
					<div className="h-96 basis-1/3 rounded-md bg-amber-400">O nas</div>
				</div>
			</div>
		</section>
	);
};
