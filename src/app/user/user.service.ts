import { Injectable } from "@angular/core"
import { Store } from "@ngrx/store"
import * as fromApp from '../store/app.reducer'

@Injectable()
export class UserService{

    isAuthenticated(){
        const authenticated = new Promise(
            (resolve,reject)=>{
                setTimeout(()=>{
                    this.store.select('nikeStore').subscribe((nikeData)=>{
                        resolve(nikeData.loginStatus);
                    })
                },800)
        })
        return authenticated;
    }


    constructor(private store : Store<fromApp.AppState>){}
}