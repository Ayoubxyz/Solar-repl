import {
  type ContactInquiry,
  type InsertContactInquiry,
  type QuoteRequest,
  type InsertQuoteRequest,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact Inquiries
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;
  getContactInquiry(id: string): Promise<ContactInquiry | undefined>;

  // Quote Requests
  createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest>;
  getAllQuoteRequests(): Promise<QuoteRequest[]>;
  getQuoteRequest(id: string): Promise<QuoteRequest | undefined>;
}

export class MemStorage implements IStorage {
  private contactInquiries: Map<string, ContactInquiry>;
  private quoteRequests: Map<string, QuoteRequest>;

  constructor() {
    this.contactInquiries = new Map();
    this.quoteRequests = new Map();
  }

  // Contact Inquiries
  async createContactInquiry(
    insertInquiry: InsertContactInquiry
  ): Promise<ContactInquiry> {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const inquiry: ContactInquiry = {
      id,
      ...insertInquiry,
      createdAt,
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getContactInquiry(id: string): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.get(id);
  }

  // Quote Requests
  async createQuoteRequest(
    insertRequest: InsertQuoteRequest
  ): Promise<QuoteRequest> {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const request: QuoteRequest = {
      id,
      ...insertRequest,
      createdAt,
    };
    this.quoteRequests.set(id, request);
    return request;
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getQuoteRequest(id: string): Promise<QuoteRequest | undefined> {
    return this.quoteRequests.get(id);
  }
}

export const storage = new MemStorage();
