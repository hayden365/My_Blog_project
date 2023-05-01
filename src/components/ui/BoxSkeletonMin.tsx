import React from "react";

type Props = {
	title: string;
	children: React.ReactNode;
};

export default function BoxSkeletonMin({ title, children }: Props) {
	return (
		<div className="flex flex-col w-1/3 py-12">
			<div className="flex justify-start">
				<h4 className="text-md tracking-tight text-primary font-bold min-w-fit">
					{title}
				</h4>
				<span className="content-none border-b-2 w-full ml-4 border-uRed my-auto"></span>
			</div>
			<div className="py-7">{children}</div>
		</div>
	);
}
