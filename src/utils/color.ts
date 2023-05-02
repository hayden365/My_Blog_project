export function colors(color: string) {
	const bg = `bg-${color}`;
	const text = `text-${color}`;
	const border = `border-${color}`;

	const hoverBg = `hover:bg-${color}`;
	const hoverText = `hover:text-${color}`;
	const hoverBorder = `hover:border-${color}`;

	const groupHoverBg = `group-hover:bg-${color}`;
	const groupHoverText = `group-hover:text-${color}`;
	const groupHoverBorder = `group-hover:border-${color}`;
	return {
		bg,
		text,
		border,
		hoverBg,
		hoverText,
		hoverBorder,
		groupHoverBg,
		groupHoverText,
		groupHoverBorder,
	};
}
