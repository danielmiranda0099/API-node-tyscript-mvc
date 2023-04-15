import { Request, Response } from "express";
import { registerNewUser } from "../services/auth.service";

async function registerController( {body}: Request, res: Response) {
    const newUser = await registerNewUser(body);
    res.send(newUser); 
}

async function loginController(req: Request, res: Response) {

}

export {
    registerController,
    loginController,
}