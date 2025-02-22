import { Request, Response } from "express";
import { extractJsonFromZip } from "../services/unzipService";
import { logJsonPreview } from "../utils/logger";

export const uploadZipFile = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    if (req.file.mimetype !== "application/zip") {
      return res.status(400).json({ message: "Only ZIP files are allowed" });
    }

    const jsonData = await extractJsonFromZip(req.file.buffer);

    // Log the first 300 lines
    logJsonPreview(jsonData);

    return res.json({ message: "File processed successfully", data: jsonData });
  } catch (error) {
    console.error("Error processing file:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return res
      .status(500)
      .json({ message: "Internal server error", error: errorMessage });
  }
};
