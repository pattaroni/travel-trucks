import styles from "./Header.module.scss";
import { Logo } from "@/svg/Logo";
import ActiveLink from "../ActiveLink/ActiveLink";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"} className={styles.header__logo}>
          <Logo />
        </Link>
        <nav className={styles.header__nav}>
          <ul className={styles.header__navList}>
            <li>
              <ActiveLink href={"/"}>Home</ActiveLink>
            </li>
            <li>
              <ActiveLink href={"/catalog"}>Catalog</ActiveLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
