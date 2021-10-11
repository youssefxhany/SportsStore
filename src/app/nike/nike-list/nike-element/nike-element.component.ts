import { Component, Input, OnInit } from '@angular/core';
import { Shoes } from '../../shoes.model';
import * as fromApp from '../../../store/app.reducer'
import * as nikeActions from '../../store/nike.actions'
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nike-element',
  templateUrl: './nike-element.component.html',
  styleUrls: ['./nike-element.component.css']
})
export class NikeElementComponent implements OnInit {

  @Input() nikeElement: Shoes;
  @Input() index: number;

  constructor(private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onElementChosen() {
    this.store.dispatch(new nikeActions.SelectShoes({ shoes: this.nikeElement, index: this.index }))
    let url : string = this.route.snapshot['_routerState'].url;
    if ( url.includes("/nike/list") ) {
      this.router.navigate([this.index], { relativeTo: this.route })
    }
  }

}
