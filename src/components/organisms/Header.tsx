import Link from "next/link";
import { Navbar } from "@ui/Navbar";
import { ThemeImage } from "@ui/ThemeImage";

export const Header = () => {
	return (
		<header className="mx-auto flex h-[100px] max-w-md items-center justify-between p-4 sm:mb-2 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
			{/* Logo */}
			<Link href="/" aria-label="Logo klubu Floorball Śrem">
				<ThemeImage
					srcLight={`${process.env.LOGO_LIGHT_URL}`}
					srcDark={`${process.env.LOGO_DARK_URL}`}
					alt="Floorball Śrem | Śremski Klub Unihokeja"
					width={272}
					height={52}
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
