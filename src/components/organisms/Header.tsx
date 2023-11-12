import NextImage from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/molecules/Navbar";
import { ThemeModeButton } from "@/components/atoms/ThemeModeButton";

export const Header = () => {
	return (
		<header className="fixed top-0 z-10 flex h-14 w-full items-center justify-between bg-cyan-400 px-2 sm:px-10 md:px-48">
			{/* Logo */}
			<div className="flex h-36 w-36 items-center justify-center self-start rounded-b-md bg-white drop-shadow-md">
				<Link href="#about-us">
					<NextImage src={"/logo.png"} alt="Floorball-logo" width={135} height={135} priority />
				</Link>
			</div>

			{/* Navigation */}
			<div className="flex items-center gap-5">
				<Navbar />
				<span className="h-8 border bg-neutral-100" />
				<ThemeModeButton />
			</div>
		</header>
	);
};
