import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h2>Todo</h2>
      </header>
      <form className={styles.add}>
        <input name="add" />
        <button>Add</button>
      </form>
      <div className={styles.todo}>
        <h3>&dArr;Todo</h3>
        <ul>
          <li>t1</li>
          <li>t2</li>
          <li>t3</li>
        </ul>
      </div>
      <div className={styles.completed}>
        <h3>&dArr;Completed</h3>
        <ul>
          <li>t1</li>
          <li>t2</li>
          <li>t3</li>
        </ul>
      </div>
    </>
  );
}
