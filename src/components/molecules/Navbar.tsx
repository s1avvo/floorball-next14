"use client";
import { useState } from "react";
import { clsx } from "clsx";
import { MoreVertical, X } from "lucide-react";
import { ActiveLink } from "@ui/ActiveLink";

import { navbarList } from "@/constants/navigation";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav>
			{/*xl screen navbar*/}
			<ul className="hidden items-center justify-between gap-3 whitespace-nowrap lg:flex">
				{navbarList.map(({ href, title, exact }, index) => (
					<li key={index} className="text-lg font-light">
						<ActiveLink href={href} exact={exact}>
							{title}
						</ActiveLink>
					</li>
				))}
			</ul>

			{/*sm screen navbar*/}
			<div className="flex lg:hidden">
				{!isOpen ? (
					<MoreVertical width={38} height={38} onClick={() => setIsOpen(!isOpen)} className="text-paragraph" />
				) : (
					<X width={28} height={28} onClick={() => setIsOpen(!isOpen)} className="text-paragraph" />
				)}
			</div>

			<div
				className={clsx(
					"absolute left-0 top-0 z-50 flex h-screen w-5/6 items-start justify-start bg-primary shadow-lg duration-500 ease-in lg:hidden",
					`${
						!isOpen &&
						"absolute left-[-100%] top-0 z-50 flex h-screen w-full items-start justify-start bg-primary shadow-lg duration-500 ease-out lg:hidden"
					}`,
				)}
			>
				<ul className="my-5 w-full flex-col lg:hidden">
					{navbarList.map(({ href, title, exact }, index) => (
						<li key={index} className="px-8 py-4 text-lg" onClick={() => setIsOpen(!isOpen)}>
							<ActiveLink href={href} exact={exact}>
								{title}
							</ActiveLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
