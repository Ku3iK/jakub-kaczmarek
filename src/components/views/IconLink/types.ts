import { type HTMLProps, type ReactNode } from "react";
import { type LinkProps } from "next/link";

type BaseLinkProps = LinkProps & HTMLProps<HTMLAnchorElement>;

export type IconLinkProps = {
	icon: ReactNode;
	tooltipText?: string;
} & BaseLinkProps;
