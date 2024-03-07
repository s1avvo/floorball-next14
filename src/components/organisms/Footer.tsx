import Link from "next/link";
import { FileDown } from "lucide-react";
import { SocialIcons } from "@ui/SocialIcons";
import { navbarList } from "@/constants/navigation";

export const Footer = () => {
	return (
		<footer className="space-y-6 bg-primary py-4 text-center">
			<ul className="items-center justify-center gap-12 whitespace-nowrap text-base text-secondary sm:flex">
				{navbarList.map(({ href, title }, index) => (
					<li key={index}>
						<Link href={href}>{title}</Link>
					</li>
				))}
				<li className="flex items-center justify-center gap-2">
					<span>
						<FileDown className="text-accent" />
					</span>
					Deklaracja członkowska
				</li>
			</ul>

			<SocialIcons />

			<div className="flex items-center justify-center gap-4 divide-x text-sm text-heading">
				<p>&copy; 2024 Floorball Śrem</p>
				<Link href={"#"}>
					<p className="pl-4 ">Polityka prywatności</p>
				</Link>
			</div>
		</footer>
	);
};
