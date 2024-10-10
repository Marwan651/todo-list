"use server";

import { addItem } from "@/lib/todos";

export async function addTodoItem(formData) {
  const title = formData.get("title");

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("You need to write a todo");
  }

  if (errors.length > 0) {
    return {
      errors,
    };
  }

  addItem(title);
}
