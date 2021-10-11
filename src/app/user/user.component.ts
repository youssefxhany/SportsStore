import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from "../store/app.reducer"
import * as nikeActions from "../nike/store/nike.actions"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.store.dispatch(new nikeActions.Login())
  }

  onLogout(){
    this.store.dispatch(new nikeActions.Logout())
  }

}
