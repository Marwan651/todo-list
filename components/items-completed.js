"use client";

import { useState } from "react";

import styles from "./items.module.css";

export default function ItemsCompleted({ items }) {
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <div className={styles.completed}>
      <h3 onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? <span>&dArr;</span> : <span>&rArr;</span>}
        Completed
      </h3>
      {showCompleted && (
        <ul>
          {items.map((item) => (
            <li key={item.key}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
