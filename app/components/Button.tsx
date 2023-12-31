"use client";
import clsx from "clsx";
import React from "react";
import { Philosopher } from "@next/font/google";
export const font2 = Philosopher({
  subsets: ["latin"],
  weight: ["700"],
});

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onclick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
};

export default function Button({
  type,
  fullWidth,
  children,
  onclick,
  secondary,
  danger,
  disabled,
}: ButtonProps) {
  return (
    <div>
      <button
        onClick={onclick}
        type={type}
        disabled={disabled}
        className={clsx(
          `flex justify-center rounded-md px-3 py-2 text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
          font2.className,
          disabled && "opacity-50 cursor-default",
          fullWidth && "w-full",
          secondary ? "text-gray-900" : "text-white",
          danger &&
            "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
          !secondary &&
            !danger &&
            "bg-cyan-600 hover:bg-cyan-700 focus-visible:outline-cyan-700"
        )}
      >
        {children}
      </button>
    </div>
  );
}
