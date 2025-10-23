import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contact Inquiry Schema
export const contactInquiries = pgTable("contact_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  inquiryType: text("inquiry_type").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({
  id: true,
  createdAt: true,
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;

// Product Schema
export const products = pgTable("products", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // "panels", "inverters", "batteries", "equipment"
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  specs: text("specs").array().notNull(),
  image: text("image").notNull(),
  featured: integer("featured").default(0), // 0 or 1 for boolean
});

export const insertProductSchema = createInsertSchema(products);
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

// Package Schema
export const packages = pgTable("packages", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(), // "residential" or "commercial"
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  capacity: text("capacity").notNull(), // e.g., "5kW System"
  features: text("features").array().notNull(),
  energyOutput: text("energy_output").notNull(),
  coverageArea: text("coverage_area").notNull(),
  popular: integer("popular").default(0), // 0 or 1 for boolean
  badge: text("badge"), // "Most Popular", "Best Value", etc.
});

export const insertPackageSchema = createInsertSchema(packages);
export type InsertPackage = z.infer<typeof insertPackageSchema>;
export type Package = typeof packages.$inferSelect;

// Quote Request Schema
export const quoteRequests = pgTable("quote_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  itemType: text("item_type").notNull(), // "product" or "package"
  itemId: text("item_id").notNull(),
  itemName: text("item_name").notNull(),
  message: text("message"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const insertQuoteRequestSchema = createInsertSchema(quoteRequests).omit({
  id: true,
  createdAt: true,
});

export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;
