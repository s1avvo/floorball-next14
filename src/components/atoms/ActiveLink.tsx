"use client";
import { type UrlObject } from "url";
import { type Route } from "next";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

interface ActiveLinkProps<T extends string> {
	href: Route<T> | UrlObject;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}
export const ActiveLink = <T extends string>({
	href,
	children,
	className = `text-neutral-100 hover:border-b-2 border-neutral-100 p-3`,
	activeClassName = "font-semibold border-b-2 border-neutral-100",
	exact = false,
}: ActiveLinkProps<T>) => {
	const currentPath = usePathname();
	const path = typeof href === "string" ? href : href.pathname || "";

	const isActive = exact ? currentPath === path : currentPath.startsWith(`${path}/`);

	return (
		<Link
			href={href}
			className={clsx(className, `${isActive && activeClassName}`)}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
