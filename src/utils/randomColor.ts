const colorSet = [
	{ text: 'text-[#65EBE7]', hoverText: 'hover:text-[#65EBE7]' },
	{ text: 'text-[#f7b454]', hoverText: 'hover:text-[#f7b454]' },
	{ text: 'text-[#090580]', hoverText: 'hover:text-[#090580]' },
	{ text: 'text-[#46458C]', hoverText: 'hover:text-[#46458C]' },
	{ text: 'text-[#E8A9A9]', hoverText: 'hover:text-[#E8A9A9]' },
	{ text: 'text-[#F4D3D3]', hoverText: 'hover:text-[#F4D3D3]' },
	{ text: 'text-[#BE5A83]', hoverText: 'hover:text-[#BE5A83]' },
	{ text: 'text-[#E06469]', hoverText: 'hover:text-[#E06469]' },
	{ text: 'text-[#F2B6A0]', hoverText: 'hover:text-[#F2B6A0]' },
	{ text: 'text-[#DEDEA7]', hoverText: 'hover:text-[#DEDEA7]' },
];

export function hashCode(str: string): number {
	let hash = 0;
	if (str.length === 0) return hash;
	for (let i = 0; i < str.length; i++) {
		let char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash | 0;
	}
	return hash;
}

export function randomColorBy(seed: string) {
	const index = Math.floor(Math.abs(hashCode(seed)) % colorSet.length);
	return colorSet[index];
}
