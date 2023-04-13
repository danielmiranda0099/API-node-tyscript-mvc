import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

readdirSync(PATH_ROUTER).filter((filename) => {
    if( filename === "index.ts" ) return;

    const cleanName = filename.split(".").shift();
    import(`./${cleanName}`).then( (moduleRouter) => {
        router.use(`/${cleanName}`, moduleRouter.router);
    });
});

export { router };

