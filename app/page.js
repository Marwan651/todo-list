import styles from "./page.module.css";
import { addTodoItem } from "@/actions/add-todo";
import ItemsTodo from "@/components/items-todo";
import ItemsCompleted from "@/components/items-completed";
import { getAllItems, getCompletedItems, getTodoItems } from "@/lib/todos";

export default function Home() {
  const items = getAllItems();
  const todos = getTodoItems();
  const completed = getCompletedItems();

  return (
    <>
      <header className={styles.header}>
        <h2>Todo</h2>
      </header>
      <form className={styles.add} action={addTodoItem}>
        <input required name="title" />
        <button>Add</button>
      </form>
      <ItemsTodo items={todos} />
      <ItemsCompleted items={completed} />
    </>
  );
}
