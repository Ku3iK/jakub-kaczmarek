import { TypographyH1, TypographyParagraph } from "@/components/views/Typography";

export const Articles = () => {
	return (
		<section
			aria-labelledby={"articles-heading"}
			aria-describedby={"articles-description"}
			className={"flex max-w-lg flex-col gap-6"}
		>
			<TypographyH1 id={"articles-heading"}>{"Articles"}</TypographyH1>
			<TypographyParagraph id={"articles-description"}>
				{"Stay tuned, coming soon..."}
			</TypographyParagraph>
		</section>
	);
};
