import { Request, Response } from "express";

import { handleErrorHTTP } from "../utils/error.handle";


function getItem(req: Request, res: Response) {
    try {
        
    } catch (error) {
        handleErrorHTTP(res, error as Error, "ERROR_ITEM");
    }
}

function getItems(req: Request, res: Response) {
    try {
        
    } catch (error) {
        handleErrorHTTP(res, error as Error, "ERROR_ITEM");
    }
}

function postItem({body}: Request, res: Response) {
    try {
        const { data } = body;
        res.send({data});
    } catch (error) {
        handleErrorHTTP(res, error as Error, "ERROR_ITEM");
    }
}

function updateItem(req: Request, res: Response) {
    try {
        
    } catch (error) {
        handleErrorHTTP(res, error as Error, "ERROR_ITEM");
    }
}

function deleteItem(req: Request, res: Response) {
    try {
        
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