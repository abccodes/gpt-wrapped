import { Request, Response } from "express";
import { extractJsonFromZip } from "../services/unzipService";
import { processConversations } from "../services/conversationService";
import {
  calculateOverallTotals,
  calculateUsageByMonth,
  calculateTopMonthsImpact,
} from "../services/metricsService";
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
    const jsonData = await extractJsonFromZip(req.file.buffer);

    const conversations = processConversations(jsonData);

    const allMessages = conversations.flatMap((convo) => convo.messages);

    const usageByMonth = calculateUsageByMonth(allMessages);
    const queriesByModel: Record<string, number> = {};

    conversations.forEach((convo) => {
      const model = convo.model;
      const numQueries = convo.messages.filter(
        (msg) => msg.author.role === "user"
      ).length;
      queriesByModel[model] = (queriesByModel[model] || 0) + numQueries;
    });

    const overallMetrics = calculateOverallTotals(queriesByModel);
    const topMonthsImpact = calculateTopMonthsImpact(
      usageByMonth,
      queriesByModel
    );

    logResults(
      conversations,
      queriesByModel,
      overallMetrics,
      usageByMonth,
      topMonthsImpact
    );

    res.json({
      message: "Processing complete",
      conversations,
      overallMetrics,
      usageByMonth,
      topMonthsImpact,
    });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: "Internal error", error: errorMessage });
  }
};
