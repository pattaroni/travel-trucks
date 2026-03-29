import Button from "@/components/Button/Button";
import styles from "./Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <Image src={"/hero.png"} fill alt="Hero" />

        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>Campers of your dreams</h1>
          <p className={styles.hero__description}>
            You can find everything you want in our catalog
          </p>
          <Button href="/catalog" className={styles.hero__button}>
            View Now
          </Button>
        </div>
      </section>
    </>
  );
}
