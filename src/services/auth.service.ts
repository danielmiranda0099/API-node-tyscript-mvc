import { User } from "../interfaces/user.interface";
import { userModel } from "../models/user"


async function registerNewUser({ email, password, name }: User) {
    const isCheck = await userModel.findOne({email});
    if(isCheck){
        return "ALREADY_USER";
    }

    const registerNewUser = await userModel.create({email, password, name});

    return registerNewUser;
}

async function loginUser() {

}

export {
    registerNewUser,
    loginUser
}