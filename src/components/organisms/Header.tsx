import NextImage from "next/image";
import { Navbar } from "@/components/molecules/Navbar";

export const Header = () => {
	return (
		<header className="sticky top-0 z-10 flex h-14 w-full items-center justify-between bg-cyan-500">
			{/* Logo */}
			<div className="min-h-[155px] w-4/5 self-start overflow-hidden drop-shadow-lg sm:w-1/3">
				<div className="h-full w-full bg-neutral-100">
					<NextImage
						className="absolute right-[75px] top-0 z-50 aspect-square"
						src={"/logo.png"}
						alt="Floorball-logo"
						width={150}
						height={150}
						priority
					/>
				</div>
				<div className="relative border-l-4 border-r-[100px] border-t-[155px] border-neutral-100 border-r-transparent" />
			</div>
			{/* Navigation */}
			<Navbar />
		</header>
	);
};
