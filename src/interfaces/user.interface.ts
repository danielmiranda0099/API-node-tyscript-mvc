import { Auth } from "./auth.imterface";

export interface User extends Auth {
    name: string;
    description: string;
}