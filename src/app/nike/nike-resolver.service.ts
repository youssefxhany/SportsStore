import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromNike from './store/nike.reducer';
import * as fromApp from '../store/app.reducer';
import * as nikeActions from '../nike/store/nike.actions';
import { Actions, ofType } from "@ngrx/effects";
import { take } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class NikeResolver implements Resolve<fromNike.State>{
    resolve(route : ActivatedRouteSnapshot,
            state : RouterStateSnapshot) : Observable<fromNike.State> | Promise<fromNike.State> | fromNike.State{
                console.log("at resolver dispatching action")
                this.store.dispatch(new nikeActions.FetchData())
                return this.actions$.pipe(ofType(nikeActions.GET_SHOES),take(1));
    }
    constructor(private store: Store<fromApp.AppState>,
                private actions$: Actions){}
}