import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: ["/", "/news", "/news(.*)", "/api/news", "/api/news(.*)", "/article", "/article(.*)", "/api/og", "/api/og(.*)" ],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
