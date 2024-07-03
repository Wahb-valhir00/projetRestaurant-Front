import { Restaurant } from "./restaurant";
import { User } from "./user";

export interface Report{
    
    id:string;
    user:User;
    restaurant:Restaurant;
    message:string;
}