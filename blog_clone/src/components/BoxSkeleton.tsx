import React from "react";

type Props = {
	title: string;
	children: React.ReactNode;
};

export default function BoxSkeleton({ title, children }: Props) {
	return (
		<div className="flex flex-col w-full py-12">
			<div className="flex justify-start">
				<h4 className="text-2xl tracking-tight text-primary font-bold min-w-fit">
					{title}
				</h4>
				<span className="content-none border-b-2 w-full ml-4 border-uRed my-auto"></span>
			</div>
			<div className="py-7">{children}</div>
		</div>
	);
}
