"use client";
import { useState, useEffect } from "react";
import { Home, User, MessageSquare, Bell, Settings } from "lucide-react";

interface NavItem {
  name: string;
  icon: JSX.Element;
  path: string;
}

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const navItems: NavItem[] = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "Profile", icon: <User size={18} />, path: "/profile" },
    { name: "Messages", icon: <MessageSquare size={18} />, path: "/messages" },
    { name: "Notifications", icon: <Bell size={18} />, path: "/notifications" },
    { name: "Settings", icon: <Settings size={18} />, path: "/settings" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`border-r border-[#202020] bg-[#0F0F0F] text-[#C8BEB5] transition-all duration-300 ease-in-out ${
        isMobile
          ? "fixed bottom-0 left-0 right-0 flex h-16 items-center justify-around border-r-0 border-t"
          : "fixed left-0 top-0 h-screen w-64 p-6"
      }`}
    >
      <span
        className={`${isMobile ? "hidden" : "block"} text-center font-serif text-2xl font-semibold italic text-[#FF6B6B]`}
      >
        devpatch{" "}
      </span>
      <div
        className={`${isMobile ? "flex w-full justify-around" : "mt-12 flex flex-col gap-2"}`}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className={`flex w-full items-center rounded-lg p-2 transition-all duration-200 ${
              isMobile ? "flex-col text-xs" : "space-x-4 hover:space-x-5"
            }`}
          >
            {item.icon}
            {!isMobile && <span className="font-serif">{item.name}</span>}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
