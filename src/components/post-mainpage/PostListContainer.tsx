"use client";
import usePosts from "@/hooks/usePosts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IPost } from "../../../type";
import PaginateUi from "../ui/PaginateUi";
import PostBottom from "./PostBottom";
import PostTop from "./PostTop";

type Props = {
  size?: "small" | "large";
  posts: IPost[];
};

export default function PostListContainer({ posts, size = "large" }: Props) {
  const [activePage, setActivePage] = useState(1);
  const [limit, setLimit] = useState(4);
  const pathname = usePathname();
  const { isLoading } = usePosts();

  useEffect(() => {
    pathname === "/" ? setLimit(4) : setLimit(6);
  }, [pathname]);
  const offset = (activePage - 1) * limit;

  return (
    <>
      <ul
        className={`${
          size === "small"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 my-[60px]"
            : "grid lg:col-start-1 lg:col-end-3 mb-[60px] mt-20"
        }`}
      >
        {posts?.slice(offset, offset + limit).map((post) => (
          <li
            key={post.title}
            className={`flex flex-col mb-[40px] ${size === "small" ? "" : ""}`}
          >
            <article className="flex flex-col p-5 lg:max-w-3xl mx-6 lg:px-3 box-content shadow-lg">
              <PostTop post={post} size={size} />
              <PostBottom post={post} size={size} />
            </article>
            {size === "small" ? (
              ""
            ) : (
              <div className="mx-auto">
                <Link href={`/posts/${post.postId}`}>
                  <button className="relative bottom-1/2 text-white bg-uBlack py-2 px-6 mx-auto">
                    Continue Reading
                  </button>
                </Link>
              </div>
            )}
          </li>
        ))}
        {size === "small" ? (
          ""
        ) : (
          <PaginateUi
            total={posts?.length || 4}
            limit={limit}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        )}
      </ul>
      {size === "small" ? (
        <PaginateUi
          total={posts?.length || 4}
          limit={limit}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      ) : (
        ""
      )}
    </>
  );
}
