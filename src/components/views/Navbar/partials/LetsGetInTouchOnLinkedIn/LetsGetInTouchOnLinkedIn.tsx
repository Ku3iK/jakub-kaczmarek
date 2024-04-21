import { IconLink } from "@/components/views/IconLink";
import { SOCIAL_MEDIA } from "@/constants/socialMedia";
import { LinkedIn } from "@/components/icons/LinkedIn";

export const LetsGetInTouchOnLinkedIn = () => {
	return (
		<IconLink
			tooltipText={"Let's get in touch on LinkedIn"}
			icon={<LinkedIn />}
			href={SOCIAL_MEDIA.linkedin.href}
			target={"_blank"}
			rel={"noopener noreferrer nofollow"}
		/>
	);
};
