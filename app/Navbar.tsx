"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";
import {AiFillBug} from "react-icons/ai";
import classNames from "classnames";

const Navbar = () => {
  const currentpath = usePathname();
  const links = [
    {label: "Dashboard", href: "/"},
    {label: "Issues", href: "/issues/list"},
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
              className={classNames({
                "text-zinc-500": currentpath !== link.href,
                "text-zinc-800": currentpath === link.href,
                "hover:text-zinc-800 transition-colors": true,
              })}
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
