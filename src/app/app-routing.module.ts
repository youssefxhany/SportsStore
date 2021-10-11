import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home/home-page/home-page.component";
import { NotFoundComponent } from "./not-found/not-found/not-found.component";

const routes : Routes = [
    {path:"",component:HomePageComponent},
    {path:"home",component:HomePageComponent},
    {
        path:"nike", 
        loadChildren: () => import('./nike/nike.module').then(module => module.NikeModule)
    },
    {
        path : "adidas",
        loadChildren : () => import('./adidas/adidas/adidas.module').then(module => module.AdidasModule)
    },
    {path : "not-found", component: NotFoundComponent},
    {path : "**" , redirectTo: "/not-found"}
]

@NgModule({
    imports : [
        RouterModule.forRoot(routes,{preloadingStrategy : PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}