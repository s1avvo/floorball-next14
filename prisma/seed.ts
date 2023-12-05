import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const posts = [
	{
		title: "Darmowe Treningi Unihokeja we wrześniu",
		first_paragraph:
			"Jest nam niezmiernie miło poinformować, że od września nasze treningi będą dla wszystkich dzieci absolutnie ZA DARMO. To wszystko dzięki wsparciu z programu Mikro Granty organizowanym przez Ministerstwo Sportu i Turystyki.",
		second_paragraph: "",
		link: "https://www.facebook.com/floorballsrem/posts/312769594631940?ref=embed_post",
	},
	{
		title: "Nowy sponsor główny",
		first_paragraph:
			"Bardzo miło jest nam poinformować, że naszym sponsorem głównym zostało Wielkopolskie Centrum Fizjoterapii. Dziękujemy dr Mateuszowi Romanowskiemu za okazaną pomoc i wsparcie.",
		second_paragraph:
			"Wielkopolskie Centrum Fizjoterapii to firma działająca od 2007 roku, zajmująca się przede wszystkim fizjoterapią i rehabilitacją medyczną. Wyróżniającą cechą jest praca na najwyższym poziomie usług rehabilitacyjnych w oparciu o międzynarodowe standardy medyczne  oraz przede wszystkim ogromną wrażliwość na potrzeby osób z niepełnosprawnościami w każdym wieku.",
		link: "https://www.facebook.com/floorballsrem/posts/288805720361661?ref=embed_post",
	},
	{
		title: "Turniej Szkół Podstawowych Gminy Śrem",
		first_paragraph:
			"Śremski Klub Unihokeja „Floorball Śrem” oraz Śremski Sport serdecznie zapraszają na Turniej Unihokeja Szkół Podstawowych, który odbędzie się w środę 17 stycznia 2024. Rozgrywki odbędą się w sali gimnastycznej w Śremskim Sporcie.",
		second_paragraph:
			"Zgłoszenie proszę wysyłać do 31.12.2023 na adres email: arkadiusz.nadolny@gmail.com, więcej informacji pod tel. 530 845 474",
		link: "https://www.facebook.com/floorballsrem/posts/310661994842700?ref=embed_post",
	},
];

async function main() {
	console.log(`Start seeding...`);
	for (const post of posts) {
		await prisma.post.create({ data: post });
	}
	console.log(`Seeding finished.`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
