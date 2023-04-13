import { Router, Request, Response } from "express";

const router = Router();

/**
 * http://localhost:3006/items  [GET]
 */
router.get('/', (req: Request, res: Response) => {
    res.send({data:"Data"});
});

export { router }