"use client";
import React from "react";

type Props = {
	totalPage: number;
	activePage: number;
	setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

export default function PaginateUi({
	totalPage,
	activePage,
	setActivePage,
}: Props) {
	return (
		<div className="items-start justify-center mx-auto flex gap-4 w-1/4 pb-[30px]">
			{activePage > 0 ? (
				<button
					className="page-button text-xs"
					onClick={() => {
						setActivePage(activePage - 1);
						window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
					}}
				>
					Previous
				</button>
			) : (
				""
			)}
			<span className="font-serif text-sm">
				{activePage + 1} of {totalPage + 1}
			</span>
			{totalPage - activePage > 0 ? (
				<button
					className="page-button text-xs"
					onClick={() => {
						setActivePage(activePage + 1);
						window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
					}}
				>
					Next
				</button>
			) : (
				""
			)}
		</div>
	);
}
