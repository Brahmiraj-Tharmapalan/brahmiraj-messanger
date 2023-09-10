"use client";
import React from "react";
import { signOut } from "next-auth/react";

type Props = {};

function page({}: Props) {
  return <button onClick={() => signOut()}>Logout</button>;
}

export default page;
