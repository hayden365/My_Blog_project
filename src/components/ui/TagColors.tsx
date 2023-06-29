import { randomColorBy } from '@/utils/randomColor';
import Link from 'next/link';

type Props = {
	tag: string;
	text_shadow?: boolean;
	box_shadow?: boolean;
};

export default function TagColors({ tag, text_shadow, box_shadow }: Props) {
	const tagColor = randomColorBy(tag);
	return (
		<>
			<Link
				href={`/tags/${tag}`}
				className={`${
					box_shadow ? 'shadow-md' : ''
				}px-2 py-1.5 mr-2.5 mb-3 transition ease-in-out delay-100 bg-inherit hover:-translate-y-1 duration-300 ${
					tagColor[1]
				}`}
			>
				<span style={{ color: tagColor[0] }}>#</span>
				<span
					className={`capitalize ${text_shadow}?? 'pl-1 [text-shadow:_3px_3px_5px_rgba(0,0,0,0.5)]':'pl-1'`}
				>
					{tag}
				</span>
			</Link>
		</>
	);
}
