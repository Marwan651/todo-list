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
