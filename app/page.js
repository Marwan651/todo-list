"use client";

import { useState } from "react";

import styles from "./page.module.css";
import { addTodoItem } from "@/actions/add-todo";

export default function Home() {
  const [showTodo, setShowTodo] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <h2>Todo</h2>
      </header>
      <form className={styles.add} action={addTodoItem}>
        <input required name="title" />
        <button>Add</button>
      </form>
      <div className={styles.todo}>
        <h3 onClick={() => setShowTodo(!showTodo)}>
          {showTodo ? <span>&dArr;</span> : <span>&rArr;</span>}
          Todo
        </h3>
        {showTodo && (
          <ul>
            <li>t1</li>
            <li>t2</li>
            <li>t3</li>
          </ul>
        )}
      </div>
      <div className={styles.completed}>
        <h3 onClick={() => setShowCompleted(!showCompleted)}>
          {showCompleted ? <span>&dArr;</span> : <span>&rArr;</span>}
          Completed
        </h3>
        {showCompleted && (
          <ul>
            <li>t1</li>
            <li>t2</li>
            <li>t3</li>
          </ul>
        )}
      </div>
    </>
  );
}
