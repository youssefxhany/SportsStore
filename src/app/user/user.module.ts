import { NgModule } from "@angular/core";
import { LoggingService } from "../logging.service";
import { UserComponent } from "./user.component";

@NgModule({
    declarations : [
        UserComponent
    ],
    exports : [
        UserComponent
    ]
})
export class UserModule{
}