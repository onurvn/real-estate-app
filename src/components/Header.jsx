"use client";

import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const Header = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(searchParams);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    router.push(`/search?${searchQuery}`);
  };

  return (
    <header className="bg-bgheader shadow-md p-2">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="hover:text-gray-400">Real Estate</span>
          </h1>
        </Link>
        <form
          className="bg-white p-1.5 rounded-lg flex items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search..."
            className="text-black focus:outline-none md:w-72"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
          <Link href="/create-listing">
            <li className="hidden md:inline  hover:underline">Create List</li>
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
