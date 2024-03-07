import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/molecules/Navbar";

export const Header = () => {
	return (
		<header className="mx-auto flex h-[110px] max-w-md items-center justify-between p-4 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
			{/* Logo */}
			<Link href="/">
				<Image
					src={"https://www.datocms-assets.com/120233/1709573393-floorball_srem.webp"}
					alt="Floorball-logo"
					width={314}
					height={60}
					quality={100}
					priority
				/>
			</Link>

			{/* Navigation */}
			<div className="lg:self-end">
				<Navbar />
			</div>
		</header>
	);
};
