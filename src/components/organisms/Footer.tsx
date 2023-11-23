import Link from "next/link";
import { type Route } from "next";
import { DocumentIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SocialIcons } from "@/components/atoms/SocialIcons";

export const Footer = () => {
	return (
		<footer id="footer" className="bg-primary py-3 text-center">
			<div className="flex w-full flex-col justify-between gap-8 whitespace-nowrap px-4 text-center font-light text-white sm:flex-row md:px-10 xl:px-48">
				<div className="flex flex-col gap-3 text-start">
					<p>Kontakt:</p>
					<span>
						<PhoneIcon width={20} height={20} className="me-2 inline-block" /> 530 845 474
					</span>
					<Link href="mailto:arkadiusz.nadolny@gmail.com">
						<EnvelopeIcon width={20} height={20} className="me-2 inline-block" />
						arkadiusz.nadolny@gmail.com
					</Link>
					<ul className="mt-3 space-x-3">
						<SocialIcons />
					</ul>
				</div>

				<div className="flex flex-col gap-3 text-start sm:text-end">
					<p>Do pobrania:</p>
					<span>
						<Link
							href={"/assets/Deklaracja_czlonkowska.pdf" as Route}
							target="_blank"
							rel="noopener noreferrer"
							locale={false}
							download
						>
							<DocumentIcon height={24} width={24} className="inline-block" /> Deklaracja
							członkowska
						</Link>
					</span>
				</div>
			</div>
			<p className="mt-8 text-sm text-white">&copy; 2023 Floorball Śrem </p>
		</footer>
	);
};
