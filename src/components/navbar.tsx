"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import HeaderProfileBtn from "./HeaderProfilebtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "/job", label: "Find Job Listings" },
    { href: "/interview/mock", label: "Mock Interview" },
    { href: "/posts", label: "Posts" },
    { href: '/interview/live', label: 'live interview' }
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">DevMatch</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 md:flex">
            {menuItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <HeaderProfileBtn />
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="rounded-lg p-2 text-gray-300 hover:text-white md:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="space-y-1 bg-black/80 px-4 pb-3 pt-2">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
