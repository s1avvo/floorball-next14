import prisma from "@/app/api/client";

export const getNews = async (limit: number, offset: number) => {
	const posts = await prisma.post.findMany({
		take: limit,
		skip: offset,
		orderBy: { updatedAt: "desc" },
	});
	return posts;
};

export const getNewsLastTwo = async () => {
	const posts = await prisma.post.findMany({ take: 2, orderBy: { updatedAt: "desc" } });
	return posts;
};

export const getNewsCount = async () => {
	const count = await prisma.post.count();
	return count;
};

export const getNewsById = async (id: string) => {
	const article = await prisma.post.findUnique({
		where: {
			id: id
		}
	});
	return article;
};

export const getNewsAll= async () => {
	const article = await prisma.post.findMany();
	return article;
};
