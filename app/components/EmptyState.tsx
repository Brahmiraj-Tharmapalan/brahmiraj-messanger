import React from "react";

import { Philosopher } from "@next/font/google";
export const font2 = Philosopher({
  subsets: ["latin"],
  weight: ["700"],
});

type Props = {};

function EmptyState({}: Props) {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-100">
      <div className="text-center items-center flex flex-col">
        <h3
          className={`${font2.className} mt-2 text-2xl font-semibold text-gray-700`}
        >
          Select a chat or start a new conversation
        </h3>
      </div>
    </div>
  );
}

export default EmptyState;
