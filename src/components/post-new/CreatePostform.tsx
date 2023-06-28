'use client';

import usePosts from '@/hooks/usePosts';
import { useRouter } from 'next/navigation';
import { DragEventHandler, ChangeEvent, FormEvent, useState } from 'react';
import RedButton from '../RedButton';
import Image from 'next/image';
import TagInput from './TagInput';

type Form = {
	title: string;
	content: string;
};

const DEFAULT_DATA = {
	title: '',
	content: '',
};

const inputStyle =
	'font-semibold border border-gray-300 rounded-sm text-primary indent-2 p-1';

export default function CreatePostForm() {
	const [form, setForm] = useState<Form>(DEFAULT_DATA);
	const [tags, setTags] = useState<string[]>([]);
	const [file, setFile] = useState<File>();
	const [dragging, setDragging] = useState(false);
	const { addPost } = usePosts();
	const router = useRouter();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const files = e.target?.files;
		if (files && files[0]) {
			setFile(files[0]);
		}
	};

	const handleDrag: DragEventHandler<HTMLLabelElement> = e => {
		if (e.type === 'dragenter') {
			setDragging(true);
		} else if (e.type === 'dragleave') {
			setDragging(false);
		}
	};

	const handleDragOver: DragEventHandler<HTMLLabelElement> = e => {
		e.preventDefault();
	};

	const handleDrop: DragEventHandler<HTMLLabelElement> = (
		e: React.DragEvent<HTMLLabelElement>,
	) => {
		e.preventDefault();
		setDragging(false);
		const files = e.dataTransfer?.files;
		if (files && files[0]) {
			setFile(files[0]);
		}
	};

	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setForm(prev => ({ ...prev, [name]: value }));
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addPost({ form, tags, file });
		router.push('/');
	};

	return (
		<form className="flex flex-col gap-6 h-full py-10" onSubmit={onSubmit}>
			<label htmlFor="title">Title</label>
			<input
				className={inputStyle}
				type="text"
				id="title"
				name="title"
				value={form.title}
				onChange={onChange}
				required
			/>
			<label htmlFor="tag">Tags</label>
			<TagInput tags={tags} setTags={setTags} />
			<label htmlFor="content">Content</label>
			<textarea
				rows={10}
				className={inputStyle}
				id="content"
				name="content"
				value={form.content}
				onChange={onChange}
				required
			/>
			<input
				className="hidden"
				name="input"
				id="input-upload"
				type="file"
				accept="image/*"
				onChange={handleChange}
				required
			/>
			<label
				className={`w-full h-60 flex flex-col items-center justify-center ${
					!file && 'border-2 border-sky-500 border-dashed'
				}`}
				htmlFor="input-upload"
				onDragEnter={handleDrag}
				onDragLeave={handleDrag}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
			>
				{dragging && (
					<div className="absolute inset-0 z-10 bg-sky-500/20 pointer-events-none"></div>
				)}
				{!file && (
					<div className="flex flex-col items-center pointer-events-none">
						<p>Drag and Drop your image here or click</p>
					</div>
				)}
				{file && (
					<div className="relative w-full aspect-square">
						<Image
							className="object-cover"
							src={URL.createObjectURL(file)}
							alt="local file"
							fill
							sizes="650px"
						/>
					</div>
				)}
			</label>
			<RedButton text="Create" />
		</form>
	);
}
