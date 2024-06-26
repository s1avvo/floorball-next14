import Link from "next/link";
import { FileDown } from "lucide-react";
import { navigationList } from "@/constants/navigation";
import { SocialIcons } from "@ui/SocialIcons";
import { LucideIconWithText } from "@ui/LucideIconWithText";

export const Footer = () => {
	return (
		<footer className="space-y-6 bg-primary py-4 text-center">
			<ul className="items-center justify-center gap-12 whitespace-nowrap text-base text-secondary sm:flex">
				{navigationList.map(({ href, title }, index) => (
					<li key={index}>
						<Link href={href}>{title}</Link>
					</li>
				))}
				<li className="flex items-center justify-center gap-2">
					<Link href={`${process.env.DEKLARACJA_URL}`} download target="_blank" rel="noopener noreferrer">
						<LucideIconWithText Icon={FileDown} size={24} style="text-accent">
							Deklaracja członkowska
						</LucideIconWithText>
					</Link>
				</li>
			</ul>

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
