import {hash, compare} from "bcryptjs";

async function encrypt(password: string) {
    const passwordHash = await hash(password, 5);
    return passwordHash;
}

function verified() {

}

export {
    encrypt,
    verified
}