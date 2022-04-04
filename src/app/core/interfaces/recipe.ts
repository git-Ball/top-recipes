import { IUser } from "./user";

export interface IRecipe {

    recipeName: string,
    img: string,
    ingredients: string,
    preparation: string,
    objectId: string;
    updateAt: string;
    created_at: string;

    owner: IUser,
    // _id:IUser;
    // __v:number;
}