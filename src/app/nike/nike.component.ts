import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer'
import * as nikeActions from '../nike/store/nike.actions'
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.css']
})
export class NikeComponent implements OnInit {

  constructor(private store:Store<fromApp.AppState>,
              private loggingService:LoggingService) { }

  ngOnInit(): void {
    //this.store.dispatch(new nikeActions.FetchData())
    this.loggingService.printMessage("Hello from the Nike component")
  }

}
