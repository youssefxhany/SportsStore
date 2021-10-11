import { Shoes } from "../shoes.model";
import * as nikeActions from './nike.actions'

export interface State{
    shoesList : Shoes[],
    selectedShoes : Shoes,
    selectedShoesIndex : number,
    loginStatus : boolean
}

const initialState : State = {
    shoesList : [],
    selectedShoes: null,
    selectedShoesIndex: -1,
    loginStatus : false
}

export function NikeReducer(state: State = initialState,action:nikeActions.nikeActions){
    switch(action.type){
        case nikeActions.GET_SHOES:
            return {
                ...state,
                shoesList : [...action.payload]
            }
        case nikeActions.ADD_SHOES:
            return {
                ...state,
                shoesList: [...state.shoesList,action.payload]
            }
        case nikeActions.DELETE_SHOES:
            return {
                ...state,
                shoesList : [...state.shoesList.slice(0,action.payload.index),...state.shoesList.slice(action.payload.index+1)],
            }
        case nikeActions.SELECT_SHOES:
            return {
                ...state,
                selectedShoes : action.paylooad.shoes,
                selectedShoesIndex : action.paylooad.index
            }
        case nikeActions.EDIT_SHOES:
            console.log("@edit shoes @reducer")
            let newShoes = new Shoes(
                action.payload.newShoes.name,
                action.payload.newShoes.size,
                action.payload.newShoes.color,
                action.payload.newShoes.price)
            return {
                ...state,
                shoesList: [...state.shoesList.slice(0,action.payload.index),newShoes,...state.shoesList.slice(action.payload.index+1)],
                selectedShoes : null,
                selectedShoesIndex: -1
            }
        case nikeActions.LOGIN:
            return {
                ...state,
                loginStatus : true
            }
        case nikeActions.LOGOUT:
            return {
                ...state,
                loginStatus : false
            }
        case nikeActions.GET_SHOES_FROM_STORE:
            return{
                ...state
            }
        default: 
            return state;
    }
}