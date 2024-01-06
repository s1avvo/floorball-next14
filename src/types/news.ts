export type NewsType = {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	title: string;
	first_paragraph: string;
	second_paragraph?: string;
	link?: string;
};
