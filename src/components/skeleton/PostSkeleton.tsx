import React from "react";

export default function PostSkeleton() {
  return (
    <li className="flex flex-col mb-[40px]">
      <article className="flex flex-col p-5 lg:max-w-3xl mx-6 lg:px-3 box-content shadow-lg">
        {/* PostTop 스켈레톤 */}
        <div className="flex gap-8 items-center">
          <div className="relative overflow-hidden shrink-0 border border-white z-10 w-40 h-40">
            <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <div className="h-[28px] bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
            <div className="font-serif flex gap-2 text-sm pt-2">
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* PostBottom 스켈레톤 */}
        <div className="pt-8">
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex gap-2">
              <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
              <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
            </div>
            <div className="flex">
              <div className="w-[30px] h-[30px] bg-gray-200 rounded-full animate-pulse"></div>
              <div className="pl-4">
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="mx-auto">
        <div className="relative bottom-1/2 text-white bg-uBlack py-2 px-6 mx-auto w-32 h-10 animate-pulse"></div>
      </div>
    </li>
  );
}
