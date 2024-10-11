"use client";

import { useState } from "react";

import styles from "./items.module.css";

export default function ItemsTodo({ items }) {
  const [showTodo, setShowTodo] = useState(false);

  return (
    <div className={styles.todo}>
      <h3 onClick={() => setShowTodo(!showTodo)}>
        {showTodo ? <span>&dArr;</span> : <span>&rArr;</span>}
        Todo
      </h3>
      {showTodo && (
        <ul>
          {items.map((item) => (
            <li key={item.key}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
