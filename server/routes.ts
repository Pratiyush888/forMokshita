import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/memories', async (req, res) => {
    try {
      const memories = await storage.getAllMemories();
      // Sort by order field
      memories.sort((a, b) => a.order - b.order);
      res.json(memories);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch memories' });
    }
  });

  app.get('/api/gallery', async (req, res) => {
    try {
      const photos = await storage.getAllGalleryPhotos();
      // Sort by order field
      photos.sort((a, b) => a.order - b.order);
      res.json(photos);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch gallery photos' });
    }
  });

  // Define birthday date endpoint
  app.get('/api/birthday-date', (req, res) => {
    res.json({ date: 'September 8, 2024 00:00:00' });
  });

  // For birthday wishes
  app.get('/api/birthday-wishes', (req, res) => {
    const wishes = [
      "A year filled with endless joy and laughter",
      "Success in everything you pursue with your incredible talent",
      "Health, peace, and the fulfillment of your deepest desires",
      "Adventures that create beautiful memories for us to cherish"
    ];
    res.json(wishes);
  });

  // For love letter content
  app.get('/api/love-letter', (req, res) => {
    const letter = `
My dearest Mokshita,

As I sit down to write this letter, I find myself smiling at the mere thought of you. How fortunate am I to have someone as incredible as you in my life? Your presence has colored my world in ways I never thought possible.

Every moment with you feels like a gift. Your smile brightens even my darkest days. Your laughter is the melody that plays in my heart. Your intelligence and strength inspire me to be better each day.

With your birthday approaching, I find myself reflecting on how much you mean to me. You deserve not just a day of celebration, but a lifetime of happiness and joy. I am committed to doing everything in my power to be a part of making that happen.

Thank you for being you – for your kindness, your understanding, and for the love you show me every day. My life is infinitely better with you in it.

I love you more than words could ever express, and I look forward to celebrating many more birthdays together.

Forever yours,
Your Love
    `;
    res.json({ content: letter.trim() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
