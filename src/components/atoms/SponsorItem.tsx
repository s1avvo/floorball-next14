import { Image as DatoImage } from "react-datocms";
import Link from "next/link";
import { type Route } from "next";
import { type SponsorItemFragment } from "@/gql/graphql";

export const SponsorItem = ({ sponsorImage }: { sponsorImage: SponsorItemFragment }) => {
	const { logo, link } = sponsorImage;
	return (
		<Link href={link as Route}>
			<DatoImage data={logo.responsiveImage!} />
		</Link>
	);
};
