// import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import prisma from "../client";

export async function POST(request: Request) {
	const body = await request.json();
	const { title, first_paragraph, second_paragraph, link } = body;

	try {
		if (body && title.length !== 0 && first_paragraph !== 0) {
			const post = await prisma.post.create({
				data: { title, first_paragraph, second_paragraph, link },
			});

			revalidatePath("/");

			console.log("request ok", post.id);

			return new Response(post.id, { status: 201 });
		} else {
			return new Response("data error", { status: 400 });
		}
		// return NextResponse.json(post, { status: 200 });
	} catch (error) {
		console.error("request error", error);
		return new Response("error creating news", { status: 500 });
		// NextResponse.json({ error: "error creating news" }, { status: 500 });
	}
}
