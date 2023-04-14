import { Document } from "mongoose";

export interface Item extends Document{
    name: string;
    stock: number;
    shirtSize: "X" | "XL" | "S" | "M";
}