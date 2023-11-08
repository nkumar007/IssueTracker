"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
import React from "react";
import {AiFillBug} from "react-icons/ai";
import classNames from "classnames";
import {Box, Container, Flex} from "@radix-ui/themes";

const Navbar = () => {
  const currentpath = usePathname();
  const links = [
    {label: "Dashboard", href: "/"},
    {label: "Issues", href: "/issues/list"},
  ];

  const {status, data: session} = useSession();

  return (
    <nav className=" p-6 border-b mb-5">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
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
          </Flex>

          <Box>
            {status === "authenticated" && (
              <Link href="/api/auth/signout">LogOut</Link>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">LogIn</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
