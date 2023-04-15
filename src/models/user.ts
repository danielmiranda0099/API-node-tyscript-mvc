import { Schema, model } from "mongoose";

import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const userModel = model<User>("user", UserSchema);

export { userModel }





