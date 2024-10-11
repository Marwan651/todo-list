"use server";

import { redirect } from "next/navigation";

import { addItem, deleteItem, markItemCompleted } from "@/lib/todos";

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
  redirect("/");
}

export async function modifyItem(id, title) {
  markItemCompleted(id, title);
  redirect("/");
}

export async function deleteTodoItem(id) {
  deleteItem(id);
  redirect("/");
}
