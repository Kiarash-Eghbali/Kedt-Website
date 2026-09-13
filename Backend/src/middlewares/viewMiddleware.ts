import { type Request, type Response, type NextFunction } from "express";

function viewMiddleware(req: Request, res: Response, next: NextFunction) {
    const page = req.params.page;
    const cookieName = `viewed_${page}`;
    req.hasViewed = !!req.cookies[cookieName];
    next();
}

export default viewMiddleware;