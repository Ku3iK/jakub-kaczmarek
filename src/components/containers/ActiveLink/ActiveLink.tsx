"use client";

import { Button } from "@/components/ui/button";
import { type ActiveLinkTypeProps } from "@/components/containers/ActiveLink/types";
import { useIsActiveLink } from "@/hooks/useIsActiveLink"; // Correct import of your Button component

export const ActiveLink = ({ href, exact, children, ...props }: ActiveLinkTypeProps) => {
	const matchedPath = (typeof href === "string" ? href : href.pathname) ?? null;
	const isActive = useIsActiveLink({ href, exact });

	const handleClick = () => {
		if (typeof window !== "undefined") {
			window.location.href = matchedPath;
		}
	};

	return (
		<Button
			{...props}
			variant={isActive ? "default" : "ghost"}
			size={"sm"}
			aria-current={isActive ? "page" : undefined}
			onClick={handleClick}
		>
			{children}
		</Button>
	);
};
