import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Jakub Kaczmarek | Frontend Developer";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

const IMAGE_SIZE = 240;

export default async function OpengraphImage() {
	return new ImageResponse(
		(
			<div tw={"h-full w-full flex flex-col items-center justify-center bg-[#0A0A0A] text-white"}>
				<div
					tw="flex flex-row justify-center w-full px-9 w-full"
					style={{
						gap: "24px",
					}}
				>
					<div
						tw={
							"flex h-60 w-60 items-center justify-center overflow-hidden rounded-full bg-neutral-100 mr-6"
						}
					>
						<img
							src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/jakub-kaczmarek.jpg`}
							alt={alt}
							width={IMAGE_SIZE}
							height={IMAGE_SIZE}
							tw={"h-full w-full rounded-full"}
							style={{
								objectFit: "cover",
							}}
						/>
					</div>
					<div
						tw={"flex flex-col max-w-lg"}
						style={{
							gap: "12px",
						}}
					>
						<h1 tw={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Jakub Kaczmarek</h1>
						<div tw={"h-1 w-full bg-slate-200"} />
						<p tw={"text-lg"}>
							{
								"I'm a Frontend Developer specializing in TypeScript, React.js, and Next.js. I'm focusing on further development in frontend technologies and directing my career path towards Fullstack Development."
							}
						</p>
					</div>
				</div>
			</div>
		),
	);
}
