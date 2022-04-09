import { IUser } from "./user";

export interface ICreateRecipe {

    recipeName: string,
    img: string,
    ingredients: string,
    preparation: string,


    // owner: IUser.objectId,
    // _id:IUser;
    // __v:number;
}