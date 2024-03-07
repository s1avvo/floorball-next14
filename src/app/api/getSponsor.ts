import { executeGraphql } from "./graphqlApi";
import { SponsorGetListDocument } from "@/gql/graphql";

export const getSponsorList = async () => {
	const graphqlResponse = await executeGraphql({
		query: SponsorGetListDocument,
	});

	return graphqlResponse.allSponsors;
};
