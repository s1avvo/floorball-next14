import { getSponsorList } from "@/app/api/getSponsor";
import { SponsorItem } from "@ui/SponsorItem";

export const Sponsor = async () => {
	const sponsors = await getSponsorList();
	return (
		<div className="mb-8">
			<h6 className="flex items-center gap-4 whitespace-nowrap px-4 text-lg text-secondary">
				Sponsorzy:
				<span className="h-1 w-full bg-secondary" />
			</h6>
			<ul className="flex items-center justify-center gap-8 px-4 pt-2 sm:gap-12">
				{sponsors.map((item) => (
					<li key={item.id}>
						<SponsorItem sponsorImage={item} />
					</li>
				))}
			</ul>
		</div>
	);
};
