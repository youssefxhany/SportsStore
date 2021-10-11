import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../user/auth-guard.service";
import { CanDeactivateGuard } from "../user/can-deactivate-guard.service";
import { NikeEditComponent } from "./nike-edit/nike-edit.component";
import { NikeDetailComponent } from "./nike-list/nike-detail/nike-detail.component";
import { NikeListComponent } from "./nike-list/nike-list.component";
import { NikeNavigationComponent } from "./nike-navigation/nike-navigation.component";
import { NikeResolver } from "./nike-resolver.service";
import { NikeComponent } from "./nike.component";

const routes : Routes = [
    {path:'' ,component:NikeComponent, children:[
        {path:"",resolve:{nikeData:NikeResolver},component:NikeNavigationComponent},
        {path:"list",canActivate:[AuthGuard],component:NikeListComponent,children:[
            {path:":id",component:NikeDetailComponent}
        ]},
        {path:"edit",canActivate:[AuthGuard],canDeactivate:[CanDeactivateGuard],component:NikeEditComponent}
    ]},
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class NikeRoutingModule{
}