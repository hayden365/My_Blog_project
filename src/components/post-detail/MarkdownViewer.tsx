'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

export default function MarkdownViewer({ content }: { content: string }) {
	return (
		<ReactMarkdown
			className="custom-markdown-style w-full"
			remarkPlugins={[remarkGfm]}
			components={{
				code({ node, inline, className, children, ...props }) {
					const match = /language-(\w+)/.exec(className || '');
					return !inline && match ? (
						<SyntaxHighlighter
							language={match[1]}
							PreTag="div"
							{...props}
							style={materialDark}
						>
							{String(children).replace(/\n$/, '')}
						</SyntaxHighlighter>
					) : (
						<code className={className} {...props}>
							{children}
						</code>
					);
				},
				img: image => (
					<Image
						className="w-full max-auto object-cover !relative"
						src={image.src || ''}
						alt={image.alt || ''}
						sizes="(max-width: 768px) 500px, 100vw"
						fill
					/>
				),
			}}
		>
			{content}
		</ReactMarkdown>
	);
}
