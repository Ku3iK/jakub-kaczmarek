import { type TypographyProps } from "@/components/views/Typography/types";

export const TypographyH1 = ({ children, ...props }: TypographyProps) => {
	return (
		<h1 {...props} className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
			{children}
		</h1>
	);
};

export const TypographyParagraph = ({ children, ...props }: TypographyProps) => {
	return (
		<p {...props} className={"text-lg"}>
			{children}
		</p>
	);
};

export const TypographyMutedParagraph = ({ children, ...props }: TypographyProps) => {
	return (
		<p {...props} className={"text-center text-sm text-muted-foreground"}>
			{children}
		</p>
	);
};
