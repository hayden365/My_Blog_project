import { getAllPostsOf } from "@/service/posts";
import { NextResponse } from "next/server";

const userId = ''

export async function GET() {
	return getAllPostsOf(userId).then(data => NextResponse.json(data));
}
