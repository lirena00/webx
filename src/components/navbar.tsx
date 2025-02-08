import { User } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import HeaderProfileBtn from "./HeaderProfilebtn";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full border-b border-gray-800 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-white">DevMatch</span>
          </Link>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/jobs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Find Job Listings
            </Link>
            <Link
              href="/mock-interview"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Mock Interview
            </Link>
            <Link
              href="/posts"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Posts
            </Link>
          </div>

          {/* Profile Section - Right */}
          <div className="flex items-center gap-4">
            <HeaderProfileBtn />
          </div>
        </div>
      </div>

      {/* Mobile Menu - Shows only on small screens */}
      <div className="md:hidden">
        <div className="space-y-1 px-4 pb-3 pt-2">
          <Link
            href="/jobs"
            className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Find Job Listings
          </Link>
          <Link
            href="/mock-interview"
            className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Mock Interview
          </Link>
          <Link
            href="/posts"
            className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Posts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
