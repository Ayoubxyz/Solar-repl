import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertContactInquirySchema,
  insertQuoteRequestSchema,
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact Inquiry Endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Contact inquiry submitted successfully",
        data: inquiry,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        console.error("Error creating contact inquiry:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      res.json({
        success: true,
        data: inquiries,
      });
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  // Quote Request Endpoint
  app.post("/api/quote-request", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Quote request submitted successfully",
        data: quoteRequest,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        console.error("Error creating quote request:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    }
  });

  // Get all quote requests (for admin purposes)
  app.get("/api/quote-request", async (req, res) => {
    try {
      const requests = await storage.getAllQuoteRequests();
      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching quote requests:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      success: true,
      message: "Server is running",
      timestamp: new Date().toISOString(),
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
