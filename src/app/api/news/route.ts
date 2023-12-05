import { type NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import prisma from "@/app/api/client";

export async function POST(request: NextRequest) {
	const { title, first_paragraph, second_paragraph, link } = await request.json();

	if (title && first_paragraph && second_paragraph && link) {
		const post = await prisma.post.create({
			data: { title, first_paragraph, second_paragraph, link },
		});

		revalidatePath("/");
		console.log("request ok");

		return new Response(post.id, { status: 201 });
	} else {
		return new Response(null, { status: 400 });
	}

	// return NextResponse.json(post, { status: 200 });
	// } catch (error) {
	// 	console.error("request error", error);
	// 	return new Response("error creating webhook", { status: 500 });
	// 	// NextResponse.json({ error: "error creating webhook" }, { status: 500 });
	// }
}
