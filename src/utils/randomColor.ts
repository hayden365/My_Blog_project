const colorSet = [
	['#65EBE7', 'hover:text-[#65EBE7]'],
	['#f7b454', 'hover:text-[#f7b454]'],
	['#090580', 'hover:text-[#090580]'],
	['#46458C', 'hover:text-[#46458C]'],
	['#E8A9A9', 'hover:text-[#E8A9A9]'],
	['#F4D3D3', 'hover:text-[#F4D3D3]'],
	['#BE5A83', 'hover:text-[#BE5A83]'],
	['#E06469', 'hover:text-[#E06469]'],
	['#F2B6A0', 'hover:text-[#F2B6A0]'],
	['#DEDEA7', 'hover:text-[#DEDEA7]'],
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
