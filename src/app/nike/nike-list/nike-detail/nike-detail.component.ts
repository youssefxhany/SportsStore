import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Shoes } from '../../shoes.model';

import * as fromApp from '../../../store/app.reducer'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nike-detail',
  templateUrl: './nike-detail.component.html',
  styleUrls: ['./nike-detail.component.css']
})
export class NikeDetailComponent implements OnInit {

  index : number;
  nikeElement : Shoes = null;

  constructor(private route: ActivatedRoute,
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params)=>{
      this.index = params['id'];
      this.store.select('nikeStore').subscribe((nikeStoreData)=>{
        this.nikeElement = nikeStoreData.shoesList[this.index];
      })
    })
  }

}
