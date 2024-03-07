import Image from "next/image";
import Link from "next/link";
import { type Route } from "next";
import { type SponsorItemFragment } from "@/gql/graphql";

export const SponsorItem = ({ sponsorImage }: { sponsorImage: SponsorItemFragment }) => {
	const { logo, link } = sponsorImage;
	return (
		<Link href={link as Route}>
			<Image src={logo.url} alt={logo.alt} height={logo.height || 100} width={logo.width || 100} />
		</Link>
	);
};
