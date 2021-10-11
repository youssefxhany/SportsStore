import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer'
import * as nikeActions from '../../nike/store/nike.actions'
import { Shoes } from '../shoes.model';
import { CanComponentDeactivate } from 'src/app/user/can-deactivate-guard.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-nike-edit',
  templateUrl: './nike-edit.component.html',
  styleUrls: ['./nike-edit.component.css']
})
export class NikeEditComponent implements OnInit, CanComponentDeactivate {

  oldShoes: Shoes;
  index: number;
  name: string;
  size: number;
  color: string;
  price: number;
  editButtonClicked: boolean = false;

  constructor(private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.select('nikeStore').subscribe((nikeStoreData) => {
      if (nikeStoreData.selectedShoes !== null) {
        this.name = nikeStoreData.selectedShoes.name;
        this.color = nikeStoreData.selectedShoes.color;
        this.price = nikeStoreData.selectedShoes.price;
        this.size = nikeStoreData.selectedShoes.size;
        this.oldShoes = nikeStoreData.selectedShoes;
        this.index = nikeStoreData.selectedShoesIndex;
      }
    })
  }

  onAddShoes() {
    this.store.dispatch(new nikeActions.AddShoes({ name: this.name, size: this.size, color: this.color, price: this.price }))
  }

  onEditShoes() {
    let newShoes = new Shoes(
      this.name,
      this.size,
      this.color,
      this.price
    );
    this.editButtonClicked = true;
    this.store.dispatch(new nikeActions.StartEditShoes({ oldShoes: this.oldShoes, newShoes: newShoes, index: this.index }));
    this.router.navigate(['../', 'list'], { relativeTo: this.route })
  }

  onDeleteShoes(){
    this.store.dispatch(new nikeActions.StartDelete({index:this.index ,shoes:this.oldShoes}))
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {

    return this.store.select('nikeStore')
      .pipe(map((nikeStoreData) => nikeStoreData.selectedShoes))
      .pipe(map((selectedShoes) => {
        if(selectedShoes !== null){
        if (this.editButtonClicked === false
          && (this.size !== selectedShoes.size
          || this.color !== selectedShoes.color
          || this.price !== selectedShoes.price)) {
          return confirm("Do you want to discard changes");
        }
        else {
          return true;
        }
        }else{return true;}
      }))

  }

}
