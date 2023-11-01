import Link from "next/link";
import React from "react";
import {AiFillBug} from "react-icons/ai";

const Navbar = () => {
  const links = [
    {label: "Dashboard", href: "/"},
    {label: "Issues", href: "/issues"},
  ];
  return (
    <nav className="flex space-x-6 items-center p-6 border-b mb-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
