import { Models } from "lito-orm/src/models";

export const note = new Models("note", (col) => ({
  id: col.integer().primaryKey().default(Date.now()),
  content: col.text().notNull(),
}));
