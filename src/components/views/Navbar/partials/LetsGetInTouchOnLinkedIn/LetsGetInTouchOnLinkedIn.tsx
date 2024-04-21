import { IconLink } from "@/components/views/IconLink";
import { SOCIAL_MEDIA } from "@/constants/socialMedia";
import { LinkedIn } from "@/components/icons/LinkedIn";

const TEXT = "Let's get in touch on LinkedIn";

export const LetsGetInTouchOnLinkedIn = () => {
	return (
		<IconLink
			tooltipText={TEXT}
			aria-label={TEXT}
			icon={<LinkedIn />}
			href={SOCIAL_MEDIA.linkedin.href}
			target={"_blank"}
			rel={"noopener noreferrer nofollow"}
			prefetch={false}
		/>
	);
};
