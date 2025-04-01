"use client";
import RightSection from "@/components/RightSection";
import PostListContainer from "@/components/post-mainpage/PostListContainer";
import Slider from "@/components/slides/Slider";
import usePosts from "@/hooks/usePosts";
import PostSkeleton from "@/components/skeleton/PostSkeleton";

export default function Home() {
  const { posts, isLoading } = usePosts();
  return (
    <>
      {/* <Slider posts={postsFive} /> */}
      <div className="lg:grid lg:grid-cols-3">
        {isLoading ? (
          <ul className="grid lg:col-start-1 lg:col-end-3 mb-[60px] mt-20 space-y-8">
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
          </ul>
        ) : (
          posts && <PostListContainer posts={posts} />
        )}
        <RightSection grid="lg:col-start-3 lg:col-end-4" />
      </div>
    </>
  );
}
