import { UserService } from "../user.service";
import { IUser } from "./user";
// const userId= UserService["getUsername"]

export interface ICreateRecipe {

    recipeName: string,
    img: string,
    ingredients: string,
    preparation: string,
// ownerInfo:UserService['currentUser'];

    owner: string;
    // _id:IUser;
    // __v:number;
}