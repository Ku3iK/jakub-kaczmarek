"use client";

import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { type ActiveLinkTypeProps } from "@/components/containers/ActiveLink/types";
import { useIsActiveLink } from "@/hooks/useIsActiveLink";

export const ActiveLink = ({ href, exact, children, ...props }: ActiveLinkTypeProps) => {
	const isActive = useIsActiveLink({ href, exact });

	return (
		<Button variant={isActive ? "default" : "ghost"} size={"sm"} asChild>
			<NextLink {...props} href={href} aria-current={isActive ? "page" : undefined}>
				{children}
			</NextLink>
		</Button>
	);
};
