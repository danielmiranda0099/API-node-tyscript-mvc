import { Request, Response } from "express";

import { 
    getItem as getItemService, 
    getItems as getItemsService, 
    insertItem as insertItemService,
    updateItem as updateItemService,
    deleteItem as deleteItemService,
} from "../services/item.service";
import { handleErrorHTTP } from "../utils/error.handle";


async function getItem( { params }: Request, res: Response) {
    try {
        const { id } = params;
        const item = await getItemService(id);
        res.send(item);
    } catch (error) {
        handleErrorHTTP(res, error as Error, "ERROR_ITEM");
    }
}

async function getItems(req: Request, res: Response) {
    try {
        const items = await getItemsService();
        res.send(items);
    } catch (error) {
        handleErrorHTTP(res, error as Error, "ERROR_ITEM");
    }
}

async function postItem({body: data}: Request, res: Response) {
    try {
        const item = await insertItemService(data);
        res.send(item);
    } catch (error) {
        handleErrorHTTP(res, error as Error, "ERROR_ITEM");
    }
}

async function updateItem({ params, body: data }: Request, res: Response) {
    try {
        const { id } = params;
        const itemUpdated = await updateItemService(id, data);
        res.send(itemUpdated);
    } catch (error) {
        handleErrorHTTP(res, error as Error, "ERROR_ITEM");
    }
}

async function deleteItem({ params }: Request, res: Response) {
    try {
        const { id } = params;
        const itemDeleted = deleteItemService(id);
        res.send(itemDeleted);
    } catch (error) {
        handleErrorHTTP(res, error as Error, "ERROR_ITEM");
    }
}

export {
    getItem,
    getItems,
    postItem,
    updateItem,
    deleteItem,
}