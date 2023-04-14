import { Item } from "../interfaces/item.interface"
import { itemModel } from "../models/item"

async function getItems() {
    const items = await itemModel.find({});
    return items;
}

async function getItem(id: String) {
    const item = await itemModel.findOne({_id: id});
    return item;
}

async function insertItem(item: Item) {
    const newItem = await itemModel.create(item);
    return newItem;
}

async function updateItem(id: String, item: Item) {
    const itemUpdated = await itemModel.findOneAndUpdate({_id: id}, item, { new: true });
    return itemUpdated;
}

async function deleteItem(id: string) {
    const itemDeleted = await itemModel.deleteOne({_id: id});
    return itemDeleted;
}

export {
    getItem,
    getItems,
    insertItem,
    updateItem,
    deleteItem,
}