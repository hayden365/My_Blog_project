import React from 'react';

export default function RedButton({ text }: { text: string }) {
	return (
		<button
			type="submit"
			className="bg-uRed text-white text-lg font-bold p-2 w-32"
		>
			{text}
		</button>
	);
}
