import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs/operators";
import * as nikeActions from './nike.actions'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Shoes } from "../shoes.model";
import { setNgrxMockEnvironment, Store } from "@ngrx/store";
import * as fromApp from '../../store/app.reducer'

export interface responseData {
    name: string,
    size: number,
    color: string,
    price: number
}


@Injectable()
export class NikeEffects {

    @Effect()
    fetchShoes = this.action$.pipe(
        ofType(nikeActions.FETCH_DATA),
        switchMap((fetchActionData) => {
            return this.http
                .get<responseData[]>('http://localhost:8080/api/shoes')
                .pipe(map((responseData) => {
                    let shoesList: Shoes[] = [];
                    responseData.forEach((responseElement: responseData) => {
                        shoesList.push(new Shoes(
                            responseElement.name,
                            responseElement.size,
                            responseElement.color,
                            responseElement.price
                        ));
                    });
                    return shoesList;
                }), map((shoesList: Shoes[]) => {
                    console.log(shoesList)
                    return new nikeActions.GetShoes(shoesList);
                })
                )
        })
    )

    @Effect()
    addShoesStart = this.action$.pipe(
        ofType(nikeActions.ADD_SHOES_START),
        switchMap((addShoesActionData: nikeActions.AddShoesStart) => {
            return this.http
                .post<responseData>('http://localhost:8080/api/shoes',
                    {
                        name: addShoesActionData.payload.name,
                        size: addShoesActionData.payload.size,
                        color: addShoesActionData.payload.color,
                        price: addShoesActionData.payload.price
                    }
                ).pipe(map(() => {
                    //return new nikeActions.FetchData();
                    return new nikeActions.GetShoesFromStore();
                }))
        })
    )

    @Effect()
    editShoes = this.action$.pipe(
        ofType(nikeActions.START_EDIT_SHOES),
        switchMap((startEditShoesActionData: nikeActions.StartEditShoes) => {
            return this.http
                .put<Shoes>('http://localhost:8080/api/shoes/' + startEditShoesActionData.payload.oldShoes.name,
                    {
                        name: startEditShoesActionData.payload.oldShoes.name,
                        size: startEditShoesActionData.payload.newShoes.size,
                        color: startEditShoesActionData.payload.newShoes.color,
                        price: startEditShoesActionData.payload.newShoes.price
                    }).pipe(map((responseData: Shoes) => {
                        console.log("edit shoes dispatched")
                        return this.store.dispatch(new nikeActions.EditShoes({ newShoes: responseData, index: startEditShoesActionData.payload.index }))
                        //    return new nikeActions.EditShoes({newShoes:responseData,index:startEditShoesActionData.payload.index})
                    }), map(() => {
                        //return  new nikeActions.FetchData();
                        return new nikeActions.GetShoesFromStore();
                    }))
        })
    )

    @Effect()
    deleteShoes = this.action$.pipe(
        ofType(nikeActions.START_DELETE),
        switchMap((nikeDeleteData: nikeActions.StartDelete) => {
            const options = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
                body: {
                    name: nikeDeleteData.payload.shoes.name,
                    size: nikeDeleteData.payload.shoes.size,
                    color: nikeDeleteData.payload.shoes.color,
                    price: nikeDeleteData.payload.shoes.price
                },
            };
            return this.http
                .delete<Shoes>('http://localhost:8080/api/shoes',options)
                .pipe(tap((responseData:Shoes)=>{
                    return this.store.dispatch(new nikeActions.Delete({index: nikeDeleteData.payload.index, shoes: responseData}));
                }),map(()=>{
                    return new nikeActions.GetShoesFromStore();
                }))
        })
    )


    constructor(private action$: Actions,
        private http: HttpClient,
        private store: Store<fromApp.AppState>) { }
}