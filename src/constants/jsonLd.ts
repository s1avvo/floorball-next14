import { type WebPage, type WithContext, type CollectionPage, type Article } from "schema-dts";
import { type ArticleItemFragment } from "@/gql/graphql";

export const homeJsonLd: WithContext<WebPage> = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	"@id": "https://floorballsrem.com/",
	url: "https://floorballsrem.com/",
	name: "Floorball Śrem | Śremski Klub Unihokeja: najnowsze informacje, harmonogram treningów, galeria zdjęć i więcej.",
	thumbnailUrl: `${process.env.LOGO_BIG_URL}`,
	description:
		"Witaj na oficjalnej stronie klubu Floorball Śrem. Nasza misja to promowanie unihokeja jako aktywności fizycznej dla wszystkich grup wiekowych oraz poziomów umiejętności.",
	inLanguage: "pl-PL",
	isPartOf: {
		"@type": "WebSite",
		"@id": "https://floorballsrem.com/#website",
		name: "Floorball Śrem | Śremski Klub Unihokeja: najnowsze informacje, harmonogram treningów, galeria zdjęć i więcej.",
		description:
			"Jesteśmy klubem unihokeja, który promuje aktywny tryb życia i buduje społeczność poprzez wspólne treningi. Dołącz do nas!.",
		url: "https://floorballsrem.com/",
		inLanguage: "pl-PL",
		publisher: {
			"@type": "Organization",
			"@id": "https://floorballsrem.com/#organization",
			name: "Floorball Śrem - Śremski Klub Unihokeja",
			url: "https://floorballsrem.com/",
			logo: {
				"@type": "ImageObject",
				"@id": "https://floorballsrem.com/#logo",
				url: `${process.env.LOGO_BIG_URL}`,
				width: "500",
				height: "500",
				caption: "Logo Floorball Śrem",
			},
		},
	},
	about: {
		"@type": "Organization",
		"@id": "https://floorballsrem.com/#organization",
		name: "Floorball Śrem - Śremski Klub Unihokeja",
		description:
			"Floorball Śrem to dynamicznie rozwijający się klub unihokeja. Dołącz do nas i odkryj pasjonujący świat unihokeja!",
		url: "https://floorballsrem.com/",
		email: `${process.env.EMAIL_TO}`,
		telephone: "530 845 474",
		logo: {
			"@type": "ImageObject",
			"@id": "https://floorballsrem.com/#logo",
			url: `${process.env.LOGO_BIG_URL}`,
			width: "500",
			height: "500",
			caption: "Logo Floorball Śrem",
		},
		sameAs: [
			"https://www.facebook.com/floorballsrem/",
			"https://www.instagram.com/floorballsrem/?igshid=MTNiYzNiMzkwZA%3D%3D",
			"https://www.tiktok.com/@floorballsrem?_t=8hUrUrNT8PA&_r=1",
		],
		address: {
			"@type": "PostalAddress",
			addressLocality: "Śrem (Śremski Sport - hala sportowa)",
			postalCode: "63-100",
			streetAddress: "ul. Staszica 1a",
			addressCountry: {
				"@type": "Country",
				name: "PL",
			},
		},
		contactPoint: [
			{
				"@type": "ContactPoint",
				telephone: "530 845 474",
				email: "arkadiusz.nadolny@gmail.com",
				areaServed: "Polska",
				availableLanguage: "Polski",
			},
		],
	},
	contentLocation: {
		"@type": "City",
		name: "Śrem",
	},
	breadcrumb: {
		"@type": "BreadcrumbList",
		"@id": "https://floorballsrem.com/#breadcrumbs",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Strona Główna",
				item: "https://floorballsrem.com/",
			},
		],
	},
	potentialAction: {
		"@type": "ReactAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: "https://floorballsrem.com/",
			actionPlatform: [
				"https://schema.org/DesktopWebPlatform",
				"https://schema.org/IOSPlatform",
				"https://schema.org/AndroidPlatform",
			],
		},
	},
};

export const contactJsonLd: WithContext<WebPage> = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	"@id": "https://floorballsrem.com/kontakt",
	url: "https://floorballsrem.com/kontakt",
	name: "Floorball Śrem | Kontakt: Skontaktuj się z nami!",
	description:
		"Chciałbyś się z nami skontaktować w sprawie członkostwa, treningów czy współpracy - jesteśmy do Twojej dyspozycji. Telefon: 530 845 474",
	inLanguage: "pl-PL",
	isPartOf: {
		"@type": "WebSite",
		"@id": "https://floorballsrem.com/#website",
		name: "Floorball Śrem | Śremski Klub Unihokeja: najnowsze informacje, harmonogram treningów, galeria zdjęć i więcej.",
		description:
			"Jesteśmy klubem unihokeja, który promuje aktywny tryb życia i buduje społeczność poprzez wspólne treningi. Dołącz do nas!.",
		url: "https://floorballsrem.com/",
		inLanguage: "pl-PL",
		publisher: {
			"@type": "Organization",
			"@id": "https://floorballsrem.com/#organization",
			name: "Floorball Śrem - Śremski Klub Unihokeja",
			url: "https://floorballsrem.com/",
			logo: {
				"@type": "ImageObject",
				"@id": "https://floorballsrem.com/#logo",
				url: `${process.env.LOGO_BIG_URL}`,
				width: "500",
				height: "500",
				caption: "Logo Floorball Śrem",
			},
		},
	},
	breadcrumb: {
		"@type": "BreadcrumbList",
		"@id": "https://floorballsrem.com/kontakt/#breadcrumbs",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Strona Główna",
				item: "https://floorballsrem.com/",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Kontakt",
				item: "https://floorballsrem.com/kontakt",
			},
		],
	},
	potentialAction: {
		"@type": "ReactAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: "https://floorballsrem.com/kontakt",
			actionPlatform: [
				"https://schema.org/DesktopWebPlatform",
				"https://schema.org/IOSPlatform",
				"https://schema.org/AndroidPlatform",
			],
		},
	},
};

export const aboutUsJsonLd: WithContext<WebPage> = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	"@id": "https://floorballsrem.com/onas",
	url: "https://floorballsrem.com/ons",
	name: "Floorball Śrem | O nas: poznaj historię i cele naszego klubu unihokeja.",
	description:
		"Dowiedz się więcej o naszym klubie, jego historii i inspiracjach, które doprowadziły do reaktywacji Śremskiego Klubu Unihokeja. Zapraszamy do współpracy!",
	inLanguage: "pl-PL",
	isPartOf: {
		"@type": "WebSite",
		"@id": "https://floorballsrem.com/#website",
		name: "Floorball Śrem | Śremski Klub Unihokeja: najnowsze informacje, harmonogram treningów, galeria zdjęć i więcej.",
		description:
			"Jesteśmy klubem unihokeja, który promuje aktywny tryb życia i buduje społeczność poprzez wspólne treningi. Dołącz do nas!.",
		url: "https://floorballsrem.com/",
		inLanguage: "pl-PL",
		publisher: {
			"@type": "Organization",
			"@id": "https://floorballsrem.com/#organization",
			name: "Floorball Śrem - Śremski Klub Unihokeja",
			url: "https://floorballsrem.com/",
			logo: {
				"@type": "ImageObject",
				"@id": "https://floorballsrem.com/#logo",
				url: `${process.env.LOGO_BIG_URL}`,
				width: "500",
				height: "500",
				caption: "Logo Floorball Śrem",
			},
		},
	},
	breadcrumb: {
		"@type": "BreadcrumbList",
		"@id": "https://floorballsrem.com/onas/#breadcrumbs",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Strona Główna",
				item: "https://floorballsrem.com/",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "O nas",
				item: "https://floorballsrem.com/onas",
			},
		],
	},
	potentialAction: {
		"@type": "ReactAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: "https://floorballsrem.com/onas",
			actionPlatform: [
				"https://schema.org/DesktopWebPlatform",
				"https://schema.org/IOSPlatform",
				"https://schema.org/AndroidPlatform",
			],
		},
	},
};

export const trainingJsonLd: WithContext<WebPage> = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	"@id": "https://floorballsrem.com/treningi",
	url: "https://floorballsrem.com/treningi",
	name: "Floorball Śrem | Treningi: harmonogram oraz galeria zdjęć z treningu.",
	description:
		"Zobacz harmonogram treningów dla różnych grup wiekowych. Weź udział w naszych zjęciach, które odbywają się regularnie w Hali Sportowej w Śremie, przy ul. Staszica 1a.",
	inLanguage: "pl-PL",
	isPartOf: {
		"@type": "WebSite",
		"@id": "https://floorballsrem.com/#website",
		name: "Floorball Śrem | Śremski Klub Unihokeja: najnowsze informacje, harmonogram treningów, galeria zdjęć i więcej.",
		description:
			"Jesteśmy klubem unihokeja, który promuje aktywny tryb życia i buduje społeczność poprzez wspólne treningi. Dołącz do nas!.",
		url: "https://floorballsrem.com/",
		inLanguage: "pl-PL",
		publisher: {
			"@type": "Organization",
			"@id": "https://floorballsrem.com/#organization",
			name: "Floorball Śrem - Śremski Klub Unihokeja",
			url: "https://floorballsrem.com/",
			logo: {
				"@type": "ImageObject",
				"@id": "https://floorballsrem.com/#logo",
				url: `${process.env.LOGO_BIG_URL}`,
				width: "500",
				height: "500",
				caption: "Logo Floorball Śrem",
			},
		},
	},
	breadcrumb: {
		"@type": "BreadcrumbList",
		"@id": "https://floorballsrem.com/treningi/#breadcrumbs",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Strona Główna",
				item: "https://floorballsrem.com/",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Treningi",
				item: "https://floorballsrem.com/treningi",
			},
		],
	},
	potentialAction: {
		"@type": "ReactAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: "https://floorballsrem.com/treningi",
			actionPlatform: [
				"https://schema.org/DesktopWebPlatform",
				"https://schema.org/IOSPlatform",
				"https://schema.org/AndroidPlatform",
			],
		},
	},
};

export const newsJsonLd = (article: ArticleItemFragment[]): WithContext<CollectionPage> => {
	return {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"@id": "https://floorballsrem.com/aktualnosci",
		url: "https://floorballsrem.com/aktualnosci",
		name: "Floorball Śrem | Aktualności: najnowsze informacje, wydarzenia klubowe i więcej.",
		headline: "Floorball Śrem | Aktualności",
		description:
			"Bądź na bieżąco z najnowszymi informacjami, relacjami z wydarzeń klubowych oraz ciekawostkami ze świata unihokeja.",
		inLanguage: "pl-PL",
		isPartOf: {
			"@type": "WebSite",
			"@id": "https://floorballsrem.com/#website",
			name: "Floorball Śrem | Śremski Klub Unihokeja: najnowsze informacje, harmonogram treningów, galeria zdjęć i więcej.",
			description:
				"Jesteśmy klubem unihokeja, który promuje aktywny tryb życia i buduje społeczność poprzez wspólne treningi. Dołącz do nas!.",
			url: "https://floorballsrem.com/",
			inLanguage: "pl-PL",
			publisher: {
				"@type": "Organization",
				"@id": "https://floorballsrem.com/#organization",
				name: "Floorball Śrem - Śremski Klub Unihokeja",
				url: "https://floorballsrem.com/",
				logo: {
					"@type": "ImageObject",
					"@id": "https://floorballsrem.com/#logo",
					url: `${process.env.LOGO_BIG_URL}`,
					width: "500",
					height: "500",
					caption: "Logo Floorball Śrem",
				},
			},
		},
		mainEntity: {
			"@type": "ItemList",
			itemListElement: article.map((item) => ({
				"@type": "BlogPosting",
				name: item.title,
				description: `${item.text.slice(0, 160).replace(/(<([^>]+)>)/gi, "")}...`,
				url: `https://floorballsrem.com/aktualnosci/${item.slug}`,
				dateCreated: item.createdat,
				author: {
					"@type": "Person",
					"@id": "https://floorballsrem.com/#author",
					name: "Arkadiusz Nadolny",
				},
			})),
		},
		breadcrumb: {
			"@type": "BreadcrumbList",
			"@id": "https://floorballsrem.com/aktualnosci/#breadcrumbs",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Strona Główna",
					item: "https://floorballsrem.com/",
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Aktualności",
					item: "https://floorballsrem.com/aktualnosci",
				},
			],
		},
		potentialAction: {
			"@type": "ReactAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: "https://floorballsrem.com/aktulnosci",
				actionPlatform: [
					"https://schema.org/DesktopWebPlatform",
					"https://schema.org/IOSPlatform",
					"https://schema.org/AndroidPlatform",
				],
			},
		},
	};
};

export const articleJsonLd = (article: ArticleItemFragment): WithContext<Article> => {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		"@id": `https://floorballsrem.com/${article.slug}`,
		headline: `${article.title}`,
		datePublished: new Date(`${article.createdat}`).toISOString(),
		wordCount: `${article.text.split(" ").length}`,
		image: `${article.image.responsiveImage?.src}`,
		description: `${article.text.slice(0, 160).replace(/(<([^>]+)>)/gi, "")}...`,
		articleSection: "Aktualności",
		inLanguage: "pl-PL",
		isPartOf: {
			"@type": "WebPage",
			"@id": "https://floorballsrem.com/aktualnosci",
			url: "https://floorballsrem.com/aktualnosci",
			name: "Floorball Śrem | Aktualności: najnowsze informacje, wydarzenia klubowe i więcej.",
			headline: "Floorball Śrem | Aktualności",
			description:
				"Bądź na bieżąco z najnowszymi informacjami, relacjami z wydarzeń klubowych oraz ciekawostkami ze świata unihokeja.",
			inLanguage: "pl-PL",
			isPartOf: {
				"@type": "WebSite",
				"@id": "https://floorballsrem.com/#website",
				name: "Floorball Śrem | Śremski Klub Unihokeja: najnowsze informacje, harmonogram treningów, galeria zdjęć i więcej.",
				description:
					"Jesteśmy klubem unihokeja, który promuje aktywny tryb życia i buduje społeczność poprzez wspólne treningi. Dołącz do nas!.",
				url: "https://floorballsrem.com/",
				inLanguage: "pl-PL",
				publisher: {
					"@type": "Organization",
					"@id": "https://floorballsrem.com/#organization",
					name: "Floorball Śrem - Śremski Klub Unihokeja",
					url: "https://floorballsrem.com/",
					logo: {
						"@type": "ImageObject",
						"@id": "https://floorballsrem.com/#logo",
						url: `${process.env.LOGO_BIG_URL}`,
						width: "500",
						height: "500",
						caption: "Logo Floorball Śrem",
					},
				},
			},
			breadcrumb: {
				"@type": "BreadcrumbList",
				"@id": `https://floorballsrem.com/aktualnosci/${article.slug}/#breadcrumbs`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Strona Główna",
						item: "https://floorballsrem.com/",
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Aktualności",
						item: "https://floorballsrem.com/aktualnosci",
					},
					{
						"@type": "ListItem",
						position: 3,
						name: `${article.title}`,
					},
				],
			},
		},
		author: {
			"@type": "Person",
			"@id": "https://floorballsrem.com/#author",
			name: "Arkadiusz Nadolny",
			url: "https://www.facebook.com/arkadiusz.nadolny.77",
		},
	};
};
