import { EMAIL_ADDRESS } from "@/constants/global";
import { Mail } from "@/components/icons/Mail";
import { IconLink } from "@/components/views/IconLink";

export const MailToMe = () => {
	return (
		<IconLink
			tooltipText={"Let's tak, email me"}
			icon={<Mail />}
			href={`mailto:${EMAIL_ADDRESS}`}
		/>
	);
};
