import { ActionReducerMap } from '@ngrx/store'
import * as fromNike from '../nike/store/nike.reducer'

export interface AppState{
    nikeStore : fromNike.State
}

export const AppReducer : ActionReducerMap<AppState> = {
    nikeStore : fromNike.NikeReducer,
}