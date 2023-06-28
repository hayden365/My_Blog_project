import CreatePostForm from '@/components/post-new/CreatePostform';
import RightSection from '@/components/RightSection';
import React from 'react';

export default function CreatePostPage() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3">
			<section className="lg:col-start-1 lg:col-end-3">
				<h1 className="text-primary font-bold text-4xl mb-10">Create a Post</h1>
				<CreatePostForm />
			</section>
			<RightSection grid="lg:col-start-3 lg:col-end-4" />
		</div>
	);
}
