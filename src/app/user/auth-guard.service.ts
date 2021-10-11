import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{

    canActivate(route : ActivatedRouteSnapshot,
                state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
                    console.log("in auth guard")
                    return this.userService.isAuthenticated().then((isAuthenticated:boolean)=>{
                        if(isAuthenticated){
                            console.log("@guard true")
                            return true;
                        }else{
                            console.log("@guard false")
                            this.router.navigate(['/home']);
                            return false;
                        }
                    })
                }

    canActivateChild(route : ActivatedRouteSnapshot,
                     state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
                        return this.canActivate(route,state);
                     }

    constructor(private userService: UserService,
                private router: Router){}
}