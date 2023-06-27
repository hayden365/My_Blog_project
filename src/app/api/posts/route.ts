import { createPost } from '@/service/post';
import { getAllPostsOf } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';

const userId = 'ysmh100';
export async function GET() {
	return getAllPostsOf(userId).then(data => NextResponse.json(data));
}

export async function POST(req: NextRequest) {
	const form = await req.formData();

	const postData = form.get('postData');
	const file = form.get('file') as Blob;

	if (!postData || !file) {
		return new Response('Bad request', { status: 400 });
	}
	return createPost('ysmh100', {
		// @ts-ignore
		...JSON.parse(postData),
		file,
	}).then(data => NextResponse.json(data));
}
