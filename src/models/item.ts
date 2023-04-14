import { Schema, model } from "mongoose";

import { Item } from "../interfaces/item.interface";

const itemSchema = new Schema<Item>(
    {
        name: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        shirtSize: {
            type: String,
            enum: ["X" , "XL" , "S" , "M"],
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const itemModel = model<Item>("item", itemSchema);

export { itemModel }





