import { Models } from "lito-orm/src/models";

export const note = new Models("note", (col) => ({
  id: col.text().primaryKey().default("cuid"),
  content: col.text().notNull(),
  isDone: col.boolean().default(false),
  createdAt: col.text().default("now"),
}));
