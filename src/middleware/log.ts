import { NextFunction, Request, Response } from "express";


function logMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log("oli :v");
    next();
}

export { logMiddleware }