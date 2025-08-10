import Link from "next/link";
import { navigationList } from "@/constants/navigation";
import { SocialIcons } from "@ui/SocialIcons";
import { Documents } from "@ui/Documents";

export const Footer = () => {
	return (
		<footer className="space-y-6 bg-primary py-8 text-center">
			<ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 whitespace-nowrap text-base text-secondary">
				{navigationList.map(({ href, title }, index) => (
					<li key={index}>
						<Link href={href}>{title}</Link>
					</li>
				))}
			</ul>

			<Documents />

			<hr className="mx-auto max-w-sm pb-4 text-primary" />

			<SocialIcons />

			<div className="flex items-center justify-center gap-4 divide-x text-sm text-heading">
				<p>&copy; 2024 Floorball Śrem</p>
				<Link href={"/polityka-prywatnosci"} target="_blank" rel="noopener noreferrer">
					<p className="pl-4 ">Polityka prywatności</p>
				</Link>
			</div>
		</footer>
	);
};
