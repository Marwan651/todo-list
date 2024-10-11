"use client";

import { useState } from "react";

import styles from "./items.module.css";
import { modifyItem } from "@/actions/todos-actions";

export default function ItemsTodo({ items }) {
  const [showTodo, setShowTodo] = useState(false);

  if (items.length === 0) {
    return;
  }

  return (
    <div className={styles.todo}>
      <h3 onClick={() => setShowTodo(!showTodo)}>
        {showTodo ? <span>&dArr;</span> : <span>&rArr;</span>}
        Todo
      </h3>
      {showTodo && (
        <ul>
          {items.map((item) => (
            <form action={() => modifyItem(item.id, item.title)}>
              <li key={item.id}>
                <p>{item.title}</p>
                <button className={styles.check}>&#10004;</button>
              </li>
            </form>
          ))}
        </ul>
      )}
    </div>
  );
}
