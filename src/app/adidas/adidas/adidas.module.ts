import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AdidasRoutingModule } from "./adidas-routing.module";
import { AdidasComponent } from "./adidas.component";

@NgModule({
    declarations : [
        AdidasComponent
    ],
    imports : [
        CommonModule,
        AdidasRoutingModule,
        SharedModule
    ]
})

export class AdidasModule{

}