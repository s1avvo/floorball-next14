import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
	const prisma = new PrismaClient();
	const body = await request.json();

	const { title, first_paragraph, second_paragraph, link } = body;

	try {
		const post = await prisma.post.create({
			data: { title, first_paragraph, second_paragraph, link },
		});
		return NextResponse.json(post, { status: 200 });
	} catch (error) {
		console.error("request error", error);
		NextResponse.json({ error: "error creating news" }, { status: 500 });
	}
}
