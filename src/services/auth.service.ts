import { User } from "../interfaces/user.interface";
import { userModel } from "../models/user"
import { encrypt } from "../utils/bcrypt.handle";


async function registerNewUser({ email, password, name }: User) {
    const isCheck = await userModel.findOne({email});
    if(isCheck){
        return "ALREADY_USER";
    }

    const passwordHash = await encrypt(password);
    const registerNewUser = await userModel.create({
        email, 
        password: passwordHash, 
        name
    });

    return registerNewUser;
}

async function loginUser() {

}

export {
    registerNewUser,
    loginUser
}