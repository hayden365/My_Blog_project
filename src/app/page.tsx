import Image from "next/image";
import RightSection from "@/components/RightSection";
import Scroll from "@/components/Scroll";
import PostList from "@/components/PostList";

export default function Home() {
	return (
		<div className="max-w-5xl m-auto grid grid-cols-1 lg:grid-cols-3">
			<PostList />
			<RightSection />
		</div>
	);
}
