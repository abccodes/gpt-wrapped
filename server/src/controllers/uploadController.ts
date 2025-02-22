import { Request, Response } from "express";
import { extractJsonFromZip } from "../services/unzipService";
import { processConversations } from "../services/conversationService";
import { calculateOverallTotals } from "../services/metricsService";
import { logResults } from "../utils/logger";

export const uploadZipFile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    if (req.file.mimetype !== "application/zip") {
      res.status(400).json({ message: "Only ZIP files are allowed" });
      return;
    }

    const jsonData = await extractJsonFromZip(req.file.buffer);

    const conversations = processConversations(jsonData);

    const queriesByModel: Record<string, number> = {};
    conversations.forEach((convo) => {
      const model = convo.model;
      const numQueries = convo.messages.filter(
        (msg) => msg.author.role === "user"
      ).length;
      queriesByModel[model] = (queriesByModel[model] || 0) + numQueries;
    });

    const overallMetrics = calculateOverallTotals(queriesByModel);

    logResults(conversations, queriesByModel, overallMetrics);

    res.json({ message: "Processing complete", conversations, overallMetrics });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ message: "Internal error", error: errorMessage });
  }
};
