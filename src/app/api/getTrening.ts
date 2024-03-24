import { executeGraphql } from "./graphqlApi";
import { TreningGetListDocument } from "@/gql/graphql";

export const getTreningSessionsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: TreningGetListDocument,
	});

	return graphqlResponse.allTrainings;
};
