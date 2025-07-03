"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("about");
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.logocontainer}>
          <Image src="/images/logo.png" alt="logo" width={48} height={48} />
          <div className={styles.logo}>Blip</div>
        </div>

        <div className={styles.navbar}>
          {["about", "pricing", "features"].map((item) => (
            <a
              key={item}
              onClick={() => setActive(item)}
              className={styles.navlink}
            >
              {item}
            </a>
          ))}
          <button className={styles.cta}>Start Now</button>
        </div>
      </div>
      <div className={styles.container}>
        <div>hello</div>
      </div>
    </div>
  );
}
