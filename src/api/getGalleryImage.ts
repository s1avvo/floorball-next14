import { executeGraphql } from "./graphqlApi";
import { GalleryGetListDocument } from "@/gql/graphql";

export const getGalleryImageList = async () => {
	const graphqlResponse = await executeGraphql({
		query: GalleryGetListDocument,
		next: { tags: ["gallery"] },
	});

	return graphqlResponse.allGalleries;
};
