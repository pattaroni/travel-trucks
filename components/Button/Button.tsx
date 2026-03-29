import Link from "next/link";
import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  className,
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={clsx(styles.button, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={clsx(styles.button, className)}>
      {children}
    </button>
  );
}
