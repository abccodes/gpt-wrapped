import express from "express";
import { upload } from "../middleware/multerConfig";
import { uploadZipFile } from "../controllers/uploadController";

const router = express.Router();

router.post("/upload", upload.single("zipFile"), uploadZipFile);

export default router;
