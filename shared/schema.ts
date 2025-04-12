import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Memories data model to store timeline memories
export const memories = pgTable("memories", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: text("date").notNull(),
  order: integer("order").notNull(),
});

export const insertMemorySchema = createInsertSchema(memories).pick({
  title: true,
  description: true,
  date: true,
  order: true,
});

export type InsertMemory = z.infer<typeof insertMemorySchema>;
export type Memory = typeof memories.$inferSelect;

// Gallery data model to store photo memories
export const galleryPhotos = pgTable("gallery_photos", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  description: text("description").notNull(),
  order: integer("order").notNull(),
});

export const insertGalleryPhotoSchema = createInsertSchema(galleryPhotos).pick({
  url: true,
  description: true,
  order: true,
});

export type InsertGalleryPhoto = z.infer<typeof insertGalleryPhotoSchema>;
export type GalleryPhoto = typeof galleryPhotos.$inferSelect;
