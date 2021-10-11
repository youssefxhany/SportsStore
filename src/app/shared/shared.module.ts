import { NgModule } from "@angular/core";
import { LoggingService } from "../logging.service";
import { SharedComponent } from "./shared/shared.component";

@NgModule({
    declarations : [
        SharedComponent
    ],
    exports : [
        SharedComponent
    ],
    providers : [
        LoggingService
    ]
})
export class SharedModule{
}