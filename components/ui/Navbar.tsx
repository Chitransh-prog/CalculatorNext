"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white py-4 px-6 flex items-center justify-between shadow-md">
      <Link href="/" className="text-xl font-semibold">
        CalcX
      </Link>

      <div className="flex gap-6">
        <Link href="/" className="hover:text-gray-300 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
