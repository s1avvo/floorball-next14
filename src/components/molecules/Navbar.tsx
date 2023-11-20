"use client";
import { type Route } from "next";
import { useState } from "react";
import { clsx } from "clsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { SocialIcons } from "@/components/atoms/SocialIcons";

const navbarList: { href: Route<string>; title: string; exact?: boolean }[] = [
	{ href: "/#trening", title: "Treningi", exact: true },
	{ href: "/#news", title: "Aktualności", exact: true },
	{ href: "/#contact", title: "Kontakt", exact: true },
];
export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav>
			{/*xl screen navbar*/}
			<ul className="hidden items-center justify-between gap-3 whitespace-nowrap sm:flex">
				{navbarList.map(({ href, title, exact }, index) => (
					<li key={index}>
						<ActiveLink href={href} exact={exact}>
							{title}
						</ActiveLink>
					</li>
				))}
				<SocialIcons />
			</ul>

			{/*sm screen navbar*/}
			<div className="flex sm:hidden">
				{!isOpen ? (
					<Bars3Icon
						width={28}
						height={28}
						onClick={() => setIsOpen(!isOpen)}
						className="text-neutral-100"
					/>
				) : (
					<XMarkIcon
						width={28}
						height={28}
						onClick={() => setIsOpen(!isOpen)}
						className="text-neutral-100"
					/>
				)}
			</div>

			<div
				className={clsx(
					"absolute left-0 top-0 z-50 flex h-screen w-4/6 items-start justify-start bg-cyan-500 shadow-lg duration-500 ease-in md:hidden",
					`${
						!isOpen &&
						"absolute left-[-100%] top-0 z-50 flex h-screen w-full items-start justify-start bg-cyan-500 shadow-lg duration-500 ease-out md:hidden"
					}`,
				)}
			>
				<ul className="my-5 w-full flex-col sm:hidden">
					{navbarList.map(({ href, title, exact }, index) => (
						<li key={index} className="p-4 text-xl" onClick={() => setIsOpen(!isOpen)}>
							<ActiveLink href={href} exact={exact}>
								{title}
							</ActiveLink>
						</li>
					))}
					<li className="mt-5 border bg-neutral-100" />
					<div className="mx-8 mt-8 flex flex-row gap-6">
						<SocialIcons />
					</div>
				</ul>
			</div>
		</nav>
	);
};
