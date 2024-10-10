import db from "./db";

export function addItem(title) {
  const result = db
    .prepare(`INSERT INTO todos (title, status) VALUES(?, ?)`)
    .run(title, 0);
  return result.lastInsertRowid;
}
