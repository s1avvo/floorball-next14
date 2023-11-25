export type Trening = {
	title: string;
	content1: string;
	content2: string;
	content3: string;
	image: {
		dark: string;
		light: string;
	};
};
export const trening: Trening[] = [
	{
		title: "1 | 2",
		content1: "18:00 - 19:00",
		content2: "17:30 - 18:30",
		content3: "",
		image: {
			dark: "/assets/icon1_dark.svg",
			light: "/assets/icon1_light.svg",
		},
	},
	{
		title: "3 | 4 | 5",
		content1: "17:00 - 19:00",
		content2: "16:30 - 18:30",
		content3: "18:00 - 19:00",
		image: {
			dark: "/assets/icon2_dark.svg",
			light: "/assets/icon2_light.svg",
		},
	},
];
