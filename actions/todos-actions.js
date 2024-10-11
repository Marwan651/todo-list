"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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
  revalidatePath("/");
  redirect("/");
}

export async function modifyItem(id, title) {
  markItemCompleted(id, title);
  revalidatePath("/");
  redirect("/");
}

export async function deleteTodoItem(id) {
  deleteItem(id);
  revalidatePath("/");
  redirect("/");
}
