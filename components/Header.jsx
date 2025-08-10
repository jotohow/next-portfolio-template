"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialIcon } from "react-social-icons";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkBase = "text-white no-underline transition-colors duration-200";

  const responsiveSocialStyles = {
    height: "clamp(42px, 2.5vw, 60px)",
    width: "clamp(42px, 2.5vw, 60px)",
  };

  const navItems = [
    { to: "/", label: "Hi", end: true },
    { to: "/about", label: "About" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Public Projects" },
  ];

  return (
    <header className="sticky top-0 w-full bg-custom-bg text-white z-[9999]">
      <div className="grid grid-cols-[1fr_auto] md:grid-cols-[100px_1fr_100px] items-center py-4 px-4">
        {/* Left: Hamburger button (mobile only) */}
        <div className="justify-self-start">
          <button
            className="md:hidden w-10 h-10 transition-transform duration-300"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? (
              <XMarkIcon className="w-full h-full transition-transform duration-300 rotate-90" />
            ) : (
              <Bars3Icon className="w-full h-full transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Navigation - single responsive implementation */}
        <nav
          className={`
            flex flex-col absolute top-full left-0 right-0 bg-custom-blue border-t border-white/20 p-4
            md:flex md:static md:flex-row md:bg-transparent md:border-none md:p-0 md:justify-center
            transition-all duration-300 ease-in-out overflow-hidden origin-top
            ${menuOpen ? "max-h-96 opacity-100 scale-y-100 pointer-events-auto" : "max-h-0 opacity-0 scale-y-0 pointer-events-none md:max-h-none md:opacity-100 md:scale-y-100 md:pointer-events-auto"}
          `}
          aria-hidden={!menuOpen || undefined}
        >
          <ul className="flex flex-col md:flex-row gap-2 md:gap-24 list-none m-0 p-0">
            {navItems.map(item => {
              const isActive = item.end
                ? pathname === item.to
                : pathname.startsWith(item.to);
              return (
                <li key={item.to}>
                  <Link
                    href={item.to}
                    className={`${linkBase} ${isActive ? "active " : ""} block py-2 md:py-0`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Social Icons */}
        <div className="justify-self-end flex gap-2">
          <SocialIcon
            url="https://github.com/yourusername"
            target="_blank"
            style={responsiveSocialStyles}
          />
          <SocialIcon
            url="https://instagram.com/yourusername"
            target="_blank"
            style={responsiveSocialStyles}
          />
          <SocialIcon
            url="https://linkedin.com/in/yourusername"
            target="_blank"
            style={responsiveSocialStyles}
          />
        </div>
      </div>
    </header>
  );
}
