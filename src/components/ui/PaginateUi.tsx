'use client';
import React from 'react';

type Props = {
	total: number;
	limit: number;
	activePage: number;
	setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

export default function PaginateUi({
	total,
	limit,
	activePage,
	setActivePage,
}: Props) {
	const numPages = Math.ceil(total / limit);

	return (
		<div className="items-start justify-center mx-auto flex gap-4 w-1/4 pb-[30px]">
			<button
				onClick={() => setActivePage(activePage - 1)}
				disabled={activePage === 1}
			>
				&lt;
			</button>
			{Array(numPages)
				.fill(0)
				.map((_, i) => (
					<button
						key={i + 1}
						className="page-button"
						onClick={() => {
							setActivePage(i + 1);
							window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
						}}
						aria-current={activePage === i + 1 && 'page'}
					>
						{i + 1}
					</button>
				))}
			<button
				onClick={() => setActivePage(activePage - 1)}
				disabled={activePage === numPages}
			>
				&gt;
			</button>
		</div>
	);
}
