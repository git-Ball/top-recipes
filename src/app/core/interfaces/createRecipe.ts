import { UserService } from "../user.service";
import { IUser } from "./user";

export interface ICreateRecipe {

    recipeName: string,
    img: string,
    ingredients: string,
    preparation: string,
// ownerInfo:UserService['currentUser'];

    // owner: IUser.objectId,
    // _id:IUser;
    // __v:number;
}