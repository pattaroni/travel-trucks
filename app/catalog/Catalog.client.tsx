"use client";

import styles from "./Catalog.module.scss";
import { getCampers } from "@/lib/api/clientApi";
import { useQuery } from "@tanstack/react-query";

export default function CatalogClient() {
  const filters = {};

  const { data } = useQuery({
    queryKey: ["campers", filters],
    queryFn: () => getCampers({}),
  });

  return (
    <>
      <section className={styles.catalog}>
        <div className="container">
          <div className={styles.catalog__inner}></div>
        </div>
      </section>
    </>
  );
}
