import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoggingService } from "../logging.service";
import { SharedModule } from "../shared/shared.module";

import { NikeEditComponent } from "./nike-edit/nike-edit.component";
import { NikeDetailComponent } from "./nike-list/nike-detail/nike-detail.component";
import { NikeElementComponent } from "./nike-list/nike-element/nike-element.component";
import { NikeListComponent } from "./nike-list/nike-list.component";
import { NikeNavigationComponent } from "./nike-navigation/nike-navigation.component";
import { NikeRoutingModule } from "./nike-routing.module";
import { NikeComponent } from "./nike.component";

@NgModule({
    declarations : [
        NikeComponent,
        NikeElementComponent,
        NikeEditComponent,
        NikeListComponent,
        NikeNavigationComponent,
        NikeDetailComponent
    ],
    imports : [
        RouterModule,
        CommonModule,
        FormsModule,
        NikeRoutingModule,
        SharedModule
    ]
})
export class NikeModule {
}