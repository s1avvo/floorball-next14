import prisma from "@/app/api/client";

export type News = {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	title: string;
	first_paragraph: string;
	second_paragraph?: string;
	link?: string;
};
export const getNews = async (limit: number, offset: number) => {
	const posts = await prisma.post.findMany({
		take: limit,
		skip: offset,
		orderBy: { updatedAt: "desc" },
	});
	return posts as News[];
};

export const getNewsLastTwo = async () => {
	const posts = await prisma.post.findMany({ take: 2, orderBy: { updatedAt: "desc" } });
	return posts as News[];
};

export const getNewsCount = async () => {
	const count = await prisma.post.count();
	return count;
};
