import express, { type Request, type Response } from "express";
import viewMiddleware from "../middlewares/viewMiddleware";
import Reaction from "../models/Reaction";
import { ipAddress } from "@vercel/functions";

const router = express.Router();

// تابع helper برای گرفتن IP واقعی کاربر
function getClientIp(req: Request): string {
	try {
		const ip = ipAddress(req as any);
		if (ip) return ip;
	} catch {
		// ignore
	}

	const forwarded = req.headers["x-forwarded-for"];
	if (forwarded) {
		return forwarded.toString().split(",")[0].trim();
	}

	return req.ip || "unknown";
}

router.get("/", viewMiddleware, async (req: Request, res: Response) => {
	try {
		const clientIp = getClientIp(req);

		if (!req.hasViewed) {
			const ipExists = await Reaction.findOne({ ip: clientIp, type: "view" });
			if (!ipExists) {
				res.cookie("viewed", "true", {
					secure: true,
					maxAge: 10 * 24 * 60 * 60 * 1000,
					sameSite: "none",
				});
				await Reaction.create({ type: "view", ip: clientIp });
			}
		}

		const [views, likes, dislikes] = await Promise.all([
			Reaction.countDocuments({ type: "view" }),
			Reaction.countDocuments({ type: "like" }),
			Reaction.countDocuments({ type: "dislike" }),
		]);

		res.json({ result: "success", code: "SUCCESSED", statusCode: 200, values: { views, likes, dislikes } });
	} catch (error) {
		console.error("REACTION GET ERROR:", error);
		res.status(500).json({ result: "server error", code: "SERVER_ERROR", statusCode: 500 });
	}
});

router.post("/like", async (req: Request, res: Response) => {
	try {
		const clientIp = getClientIp(req);
		const ipExists = await Reaction.findOne({ ip: clientIp, type: "like" });
		const dislikeBefore = await Reaction.findOne({ ip: clientIp, type: "dislike" });

		if (!ipExists && !dislikeBefore) {
			await Reaction.create({ ip: clientIp, type: "like" });
		} else {
			const likes = await Reaction.countDocuments({ type: "like" });
			return res.status(200).json({
				result: "liked or dislike before",
				code: "LIKED_OR_DISLIKE_BEFORE",
				statusCode: 200,
				value: { likes },
			});
		}

		const likes = await Reaction.countDocuments({ type: "like" });
		res.json({ result: "success", code: "SUCCESSED", statusCode: 200, value: { likes } });
	} catch (error) {
		console.error("REACTION LIKE ERROR:", error);
		res.status(500).json({ result: "server error", code: "SERVER_ERROR", statusCode: 500 });
	}
});

router.post("/dislike", async (req: Request, res: Response) => {
	try {
		const clientIp = getClientIp(req);
		const ipExists = await Reaction.findOne({ ip: clientIp, type: "dislike" });
		const likeBefore = await Reaction.findOne({ ip: clientIp, type: "like" });

		if (!ipExists && !likeBefore) {
			await Reaction.create({ ip: clientIp, type: "dislike" });
		} else {
			const dislikes = await Reaction.countDocuments({ type: "dislike" });
			return res.status(200).json({
				result: "liked or dislike before",
				code: "LIKED_OR_DISLIKE_BEFORE",
				statusCode: 200,
				value: { dislikes },
			});
		}

		const dislikes = await Reaction.countDocuments({ type: "dislike" });
		res.json({ result: "success", code: "SUCCESSED", statusCode: 200, value: { dislikes } });
	} catch (error) {
		console.error("REACTION DISLIKE ERROR:", error);
		res.status(500).json({ result: "server error", code: "SERVER_ERROR", statusCode: 500 });
	}
});

export default router;