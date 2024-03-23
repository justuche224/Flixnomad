"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      className="bg-red-500 border border-transparent px-3 py-1 rounded-md hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500 transition-all duration-300 flex justify-center items-center"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
