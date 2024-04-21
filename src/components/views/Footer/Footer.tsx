import NextLink from "next/link";
import { NAV_LINKS } from "@/constants/navLinks";
import { Button } from "@/components/ui/button";
import { TypographyMutedParagraph } from "@/components/views/Typography";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			className={"section-container border-100 flex flex-col items-center gap-3 border-t-2 py-4"}
		>
			<nav>
				<ul className={"flex items-center gap-1"}>
					{NAV_LINKS.map(({ name, label, href }) => (
						<li key={`main-nav-link-${name}`}>
							<Button variant={"link"} asChild size={"sm"}>
								<NextLink href={href}>{label}</NextLink>
							</Button>
						</li>
					))}
				</ul>
			</nav>
			<TypographyMutedParagraph>
				&copy; {currentYear} Jakub Kaczmarek. All rights reserved.
			</TypographyMutedParagraph>
		</footer>
	);
};
