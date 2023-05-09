import React from "react";

export type BannerData = {
	message: string;
	state: "success" | "error";
};

export default function Banner({
	banner: { message, state },
}: {
	banner: BannerData;
}) {
	const isSuccess = state === "success";

	return (
		<p
			className={`p-2 w-full text-center ${
				isSuccess ? "bg-green-500" : "bg-uRed"
			}`}
		>{`${message}`}</p>
	);
}
