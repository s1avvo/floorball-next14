import { executeGraphql } from "./graphqlApi";
import { TreningGetListDocument } from "@/gql/graphql";

export const getTreningList = async () => {
	const graphqlResponse = await executeGraphql({
		query: TreningGetListDocument,
	});

	return graphqlResponse.allTrainings;
};
