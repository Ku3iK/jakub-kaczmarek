import { routes } from "@/routes/routes";

export const NAV_LINKS = [
	{
		name: "homepage",
		label: "Home",
		href: routes.homepage.url(),
		exact: true,
	},
	{
		name: "articles",
		label: "Articles",
		href: routes.articles.url(),
		exact: true,
	},
];
