import { CV_URL } from "@/constants/global";
import { Cv } from "@/components/icons/Cv";
import { IconLink } from "@/components/views/IconLink";

const TEXT = "Check my CV";

export const CheckOutCv = () => {
	return (
		<IconLink
			tooltipText={TEXT}
			aria-label={TEXT}
			icon={<Cv />}
			href={CV_URL}
			download
			target={"_blank"}
		/>
	);
};
