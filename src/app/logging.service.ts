import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService{
    loggingServiceMessage : String;
    printMessage(message : String){
        console.log(message);
        console.log(this.loggingServiceMessage);
        this. loggingServiceMessage = message;
    }
}