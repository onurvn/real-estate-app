import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-bgheader shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="hover:text-gray-400">Real Estate</span>
          </h1>
        </Link>
        <form className="bg-white p-1.5 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="text-black focus:outline-none md:w-72"
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link href="/">
            <li className="hidden md:inline  hover:underline">Home</li>
          </Link>
          <Link href="/about">
            <li className="hidden md:inline  hover:underline">About</li>
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <li className="hidden md:inline  hover:underline">Sign In</li>
            </Link>
          </SignedOut>
        </ul>
      </div>
    </header>
  );
};

export default Header;
