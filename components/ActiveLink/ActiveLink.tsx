"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ActiveLink.module.scss";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function ActiveLink({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      <Link
        href={href}
        className={clsx(styles.link, isActive && styles.active)}
      >
        {children}
      </Link>
    </>
  );
}
