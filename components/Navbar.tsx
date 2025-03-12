"use client";

import Image from "next/image";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

function Navbar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-secondary shadow">
      <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link href="/">
            <Image src="/go-logo-dark.png" width={120} height={100} alt="logo" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6">
            {[
              { name: "Home", href: "/" },
              { name: "Dashboard", href: "/dashboard" },
              { name: "Questions", href: "/dashboard/questions" },
              { name: "Pricing", href: "/pricing" },
              { name: "How it Works?", href: "/how" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <li
                  className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                    path === item.href && "text-primary font-bold"
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        <div className="flex gap-3">

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* User Section */}
          <div className="relative md:block">
            {session ? (
              <div className="relative">
                {/* User Avatar */}
                <Image
                  src={session?.user?.image || "/user.png"}
                  width={40}
                  height={40}
                  alt="User Avatar"
                  className="rounded-full cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md p-2">
                    <p className="text-gray-700 font-semibold text-sm py-2">
                      {session?.user?.email}
                    </p>
                    <span className="bg-green-100 text-green-600 text-[12px] py-1 px-2 rounded-lg">
                      Free Plan
                    </span>
                    <hr className="my-3" />
                    <button
                      className="w-full font-semibold bg-red-50 px-2 text-left text-red-600 py-2 hover:bg-red-100"
                      onClick={() => signOut()}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button onClick={() => signIn("google", {callbackUrl: "/dashboard"})} />
            )}
          </div>
          
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-5 py-4 bg-secondary">
          {[
            { name: "Home", href: "/" },
            { name: "Dashboard", href: "/dashboard" },
            { name: "Questions", href: "/dashboard/questions" },
            { name: "Pricing", href: "/pricing" },
            { name: "How it Works?", href: "/how" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`block py-2 text-lg hover:text-primary ${
                  path === item.href && "text-primary font-bold"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
