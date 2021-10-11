import { Component, OnInit } from '@angular/core';
import { Shoes } from '../shoes.model';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer'
import * as nikeActions from '../store/nike.actions'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nike-list',
  templateUrl: './nike-list.component.html',
  styleUrls: ['./nike-list.component.css']
})
export class NikeListComponent implements OnInit {

  nikeList : Shoes [];

  constructor(private store: Store<fromApp.AppState>,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.subscribe((nikeData)=>{
      this.nikeList = nikeData.nikeStore.shoesList;
    })
    // this.route.data.subscribe((nikeData)=>{
    //   this.nikeList = nikeData.nikeStore.shoesList;
    // })
  }

}
