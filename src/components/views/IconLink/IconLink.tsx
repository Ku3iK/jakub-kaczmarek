import NextLink from "next/link";
import { type IconLinkProps } from "@/components/views/IconLink/types";
import { TooltipContainer } from "@/components/containers/TooltipContainer";
import { Button } from "@/components/ui/button";

export const IconLink = ({ icon, tooltipText, ...props }: IconLinkProps) => {
	if (tooltipText) {
		return (
			<TooltipContainer text={"Check my CV"}>
				<Button variant={"outline"} size={"icon"} asChild>
					<NextLink {...props}>{icon}</NextLink>
				</Button>
			</TooltipContainer>
		);
	}

	return (
		<Button variant={"outline"} size={"icon"} asChild>
			<NextLink {...props}>{icon}</NextLink>
		</Button>
	);
};
