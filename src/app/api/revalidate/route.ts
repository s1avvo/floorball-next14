import { revalidateTag } from "next/cache";
import { type NextRequest } from "next/server";

type RequestData = {
	entity_id: string;
	related_entitie_name: string;
};

export async function POST(req: NextRequest) {
	const data = (await req.json()) as RequestData;

	if (data.related_entitie_name) {
		revalidateTag(`${data.related_entitie_name}`);
	}

	return new Response(`OK`, { status: 200 });
}
