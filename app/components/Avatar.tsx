"use client";
import React from "react";
import { User } from "@prisma/client";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.jpg";

type Props = { user?: User };

function Avatar({ user }: Props) {
  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image
          src={user?.image || placeholder.src}
          alt="avatar"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
        />
      </div>
      <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3" />
    </div>
  );
}

export default Avatar;
