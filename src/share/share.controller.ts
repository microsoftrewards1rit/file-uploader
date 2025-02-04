import { createSharedFolder, getFileById } from "@/entity/entities.repository";
import { BASE_URL } from "@/lib/utils/baseUrl";
import { defaultError } from "@/lib/utils/errorMessages";
import { storage } from "@/storage/storage.repository";
import type { RequestHandler } from "express";
import createError from "http-errors";

// GET: /share/file/:fileId
export const shareFile: RequestHandler = async (req, res, next) => {
  try {
    const fileId = Number(req.params.fileId);
    const file = await getFileById(fileId);

    if (!file) throw new createError.NotFound();

    const { name: filename } = file;
    const filePath = `${req.user?.id}/${filename}`;
    const publicUrl = await storage.getFileUrl(filePath, 60 * 60 * 24 * 7);

    if (!publicUrl) {
      return res.status(500).json({ error: defaultError });
    }
    res.json({ publicUrl });
  } catch (err) {
    next(err);
  }
};

// GET: /share/folder/:folderId
export const shareFolder: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) throw new createError.Unauthorized();

    const folderId = Number(req.params.folderId);
    const defaultDuration = 60 * 60 * 24 * 3 * 1000; // 3 days
    const durationMS = Number(req.query.h) * 60 * 60 * 1000 || defaultDuration;
    const expiresAt = new Date(Date.now() + durationMS);

    const newSharedFolder = await createSharedFolder(userId, folderId, expiresAt);
    if (!newSharedFolder) {
      return res.status(500).json({ error: defaultError });
    }

    res.json({ publicUrl: `${BASE_URL}/public/${newSharedFolder.id}` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: defaultError });
  }
};
