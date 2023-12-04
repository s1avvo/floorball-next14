import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
	const prisma = new PrismaClient();
	const body = await request.json();

	const { title, first_paragraph, second_paragraph, link } = body;

	try {
		const post = await prisma.post.create({
			data: { title, first_paragraph, second_paragraph, link },
		});

		revalidatePath("/");
		console.log("request ok");
		return NextResponse.json(post, { status: 200 });
	} catch (error) {
		console.error("request error", error);
		NextResponse.json({ error: "error creating news" }, { status: 500 });
	}
}
