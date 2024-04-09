import { executeGraphql } from "./graphqlApi";
import { TrainingGetListDocument } from "@/gql/graphql";

export const getTrainingSessionsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: TrainingGetListDocument,
		next: { tags: ["training"] },
	});

	return graphqlResponse.allTrainings;
};
