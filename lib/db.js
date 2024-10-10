import sql from "better-sqlite3";

const db = sql("todos-list.db");

db.exec(`CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        status INTEGER
    );
`);

export default db;
