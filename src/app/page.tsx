'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="container">
          {count}
        </div>
        <div>
          <button onClick={() => setCount(prev => prev + 1)}>
            ぼたん
          </button>
        </div>
      </main>
    </div>
  );
}
