import { type Route } from "next";

export const navbarList: { href: Route<string>; title: string; exact?: boolean }[] = [
	{ href: "/onas", title: "O nas", exact: true },
	{ href: "/treningi", title: "Treningi", exact: true },
	{ href: "/aktualnosci", title: "Aktualności", exact: true },
	{ href: "/kontakt", title: "Kontakt", exact: true },
];
