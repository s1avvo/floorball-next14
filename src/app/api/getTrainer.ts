import { executeGraphql } from "./graphqlApi";
import { TrainerGetListDocument } from "@/gql/graphql";

export const getTrainersList = async () => {
	const graphqlResponse = await executeGraphql({
		query: TrainerGetListDocument,
		next: { tags: ["trainer"] },
	});

	return graphqlResponse.allTrainers;
};
