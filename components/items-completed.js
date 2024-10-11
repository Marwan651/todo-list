"use client";

import { useState } from "react";

import styles from "./items.module.css";
import { deleteTodoItem } from "@/actions/todos-actions";

export default function ItemsCompleted({ items }) {
  const [showCompleted, setShowCompleted] = useState(false);

  if (items.length === 0) {
    return;
  }

  return (
    <div className={styles.completed}>
      <h3 onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? <span>&dArr;</span> : <span>&rArr;</span>}
        Completed
      </h3>
      {showCompleted && (
        <ul>
          {items.map((item) => (
            <form action={() => deleteTodoItem(item.id)}>
              <li key={item.id}>
                <p>{item.title}</p>
                <button className={styles.close}>&times;</button>
              </li>
            </form>
          ))}
        </ul>
      )}
    </div>
  );
}
