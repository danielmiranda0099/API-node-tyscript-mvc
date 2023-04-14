import { Response } from "express";


function handleErrorHTTP (res: Response, error: Error ,message: string, ) {
    console.log(error)
    res.status(500);
    res.send({
        messageError: message,
        error
    });
}

export {
    handleErrorHTTP,
}