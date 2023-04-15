import { Router, Request, Response } from "express";

import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get('/', logMiddleware, getItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

export { router }