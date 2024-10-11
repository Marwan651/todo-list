import db from "./db";

export function addItem(title) {
  const result = db
    .prepare(`INSERT INTO todos (title, status) VALUES(?, ?)`)
    .run(title, 0);
  return result.lastInsertRowid;
}

export function getAllItems() {
  return db.prepare(`SELECT * FROM todos`).all();
}

export function getTodoItems() {
  return db.prepare(`SELECT * FROM todos WHERE status = ?`).all(0);
}

export function getCompletedItems() {
  return db.prepare(`SELECT * FROM todos WHERE status = ?`).all(1);
}

export function markItemCompleted(id, title) {
  return db
    .prepare(`UPDATE todos SET title = ?, status = ? WHERE id = ?`)
    .run(title, 1, id);
}

export function deleteItem(id) {
  return db.prepare(`DELETE FROM todos WHERE id = ?`).run(id);
}
