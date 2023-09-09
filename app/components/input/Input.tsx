"use client";
import React from "react";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Montserrat } from "@next/font/google";
export const font1 = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});
import { Philosopher } from "@next/font/google";
export const font2 = Philosopher({
  subsets: ["latin"],
  weight: ["700"],
});

type InputProps = {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
};
export default function Input({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
}: InputProps) {
  return (
    <div>
      <label
        className={clsx(
          `block text-lg font-medium leading-6 text-gray-900`,
          font2.className
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6`,
            errors[id] && "focus-ring-rose-500",
            disabled && "opacity-50 cursor-default",
            font1.className
          )}
        />
      </div>
    </div>
  );
}
