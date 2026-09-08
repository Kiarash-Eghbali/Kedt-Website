import { type Request, type Response, type NextFunction } from "express";


const viewMiddleware = function (req: Request, res: Response, next: NextFunction) {
    const cookie = req.cookies;
    if (!cookie.viewed) {
        req.body.newViewer = false;
        next();
    } else {
        req.body.newViewer = true;
        next();
    };

};

export default viewMiddleware;