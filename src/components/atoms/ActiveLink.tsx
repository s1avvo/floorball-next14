"use client";
import { type UrlObject } from "url";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

interface ActiveLinkProps<T extends string> {
	href: Route<T> | UrlObject;
	children: React.ReactNode;
	exact?: boolean;
}
export const ActiveLink = <T extends string>({ href, children, exact }: ActiveLinkProps<T>) => {
	const currentPath = usePathname();
	const path = typeof href === "string" ? href : href.pathname || "";

	const isActive = exact ? currentPath === path : currentPath.startsWith(`${path}/`);

	return (
		<Link href={href} className={clsx("px-3 py-2 text-secondary hover:border-b-2", `${isActive && "border-b-2"}`)}>
			{children}
		</Link>
	);
};
