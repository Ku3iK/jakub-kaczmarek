import { TypographyH1, TypographyParagraph } from "@/components/views/Typography";

export const AboutMe = () => {
	return (
		<section
			aria-labelledby={"about-me-heading"}
			aria-describedby={"about-me-description"}
			className={"flex max-w-lg flex-col gap-6"}
		>
			<TypographyH1 id={"about-me-heading"}>Hi! My name is Jakub!</TypographyH1>
			<TypographyParagraph id={"about-me-description"}>
				I'm a Frontend Developer specializing in TypeScript, React.js, and Next.js. I'm focusing on
				further development in frontend technologies and directing my career path towards Fullstack
				Development.
			</TypographyParagraph>
		</section>
	);
};
