import { NgModule } from "@angular/core";
import { NikeResolver } from "./nike/nike-resolver.service";
import { AuthGuard } from "./user/auth-guard.service";
import { CanDeactivateGuard } from "./user/can-deactivate-guard.service";
import { UserService } from "./user/user.service";

@NgModule({
    providers : [
        AuthGuard,
        UserService,
        CanDeactivateGuard,
        NikeResolver
    ]
})
export class CoreModule{

}