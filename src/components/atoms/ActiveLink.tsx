"use client";
import { type UrlObject } from "url";
import { type Route } from "next";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
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
	exact,
}: ActiveLinkProps<T>) => {
	const [hash, setHash] = useState("");
	const params = useParams();
	const currentPath = usePathname();
	const path = typeof href === "string" ? href : href.pathname || "";

	let isActive;
	if (currentPath === "/") {
		isActive = hash === path;
	} else {
		isActive = exact ? currentPath === path : currentPath.startsWith(`${path}/`);
	}

	useEffect(() => {
		setHash(window.location.hash);
	}, [params]);

	return (
		<Link href={href} className={clsx(className, `${isActive && activeClassName}`)}>
			{children}
		</Link>
	);
};
