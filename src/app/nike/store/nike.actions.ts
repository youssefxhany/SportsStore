import { Action } from "@ngrx/store";
import { Shoes } from "../shoes.model";

export const FETCH_DATA = '[NIKE] FETCH_DATA'
export const GET_SHOES = '[NIKE] GET_SHOES'
export const ADD_SHOES_START = '[NIKE] ADD_SHOES'
export const ADD_SHOES = '[NIKE] ADD_SHOES'
export const SELECT_SHOES = '[NIKE] SELECT_SHOES'
export const START_EDIT_SHOES = '[NIKE] START_EDIT_SHOES'
export const EDIT_SHOES = '[NIKE] EDIT_SHOES'
export const LOGIN = '[NIKE] LOGIN'
export const LOGOUT = '[NIKE] LOGOUT'
export const GET_SHOES_FROM_STORE = '[NIKE] GET_SHOES_FROM_STORE'
export const START_DELETE = '[NIKE] START_DELETE'
export const DELETE_SHOES = '[NIKE] DELETE_SHOES'

export class GetShoes implements Action{
    readonly type = GET_SHOES;
    constructor(public payload: Shoes[]){}
}

export class FetchData implements Action{
    readonly type = FETCH_DATA;
    constructor(){};
}

export class AddShoesStart implements Action{
    readonly type = ADD_SHOES_START;
    constructor(public payload: {name:string,size:number,color:string,price:number}){}
}

export class AddShoes implements Action{
    readonly type = ADD_SHOES;
    constructor(public payload: Shoes){}
}

export class SelectShoes implements Action{
    readonly type = SELECT_SHOES;
    constructor(public paylooad: {shoes:Shoes,index:number}){}
}

export class StartEditShoes implements Action{
    readonly type = START_EDIT_SHOES;
    constructor(public payload: {oldShoes:Shoes,newShoes:Shoes,index:number}){}
}

export class EditShoes implements Action{
    readonly type = EDIT_SHOES;
    constructor(public payload: {newShoes:Shoes,index:number}){}
}

export class Login implements Action{
    readonly type = LOGIN;
}

export class Logout implements Action{
    readonly type = LOGOUT;
}

export class GetShoesFromStore implements Action{
    readonly type = GET_SHOES_FROM_STORE;
}

export class StartDelete implements Action{
    readonly type = START_DELETE;
    constructor(public payload: {index:number,shoes:Shoes}){}
}

export class Delete implements Action{
    readonly type = DELETE_SHOES;
    constructor(public payload: {index:number,shoes:Shoes}){}
}

export type nikeActions =  
GetShoes |
FetchData |
AddShoes |
SelectShoes |
EditShoes |
Login |
Logout |
GetShoesFromStore |
StartDelete |
Delete;