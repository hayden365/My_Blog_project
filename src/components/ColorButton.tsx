import React from "react";

type Props = {
	text: string;
	onClick: () => void;
};

export default function ColorButton({ text, onClick }: Props) {
	return (
		<div className="rounded-md bg-uRed p-[0.15rem] h-8">
			<button
				className="h-full text-center bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity"
				onClick={onClick}
			>
				{text}
			</button>
		</div>
	);
}
