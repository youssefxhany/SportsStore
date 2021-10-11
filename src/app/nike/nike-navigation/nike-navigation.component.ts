import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nike-navigation',
  templateUrl: './nike-navigation.component.html',
  styleUrls: ['./nike-navigation.component.css']
})
export class NikeNavigationComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onShowProductList(){
    this.router.navigate(['list'], {relativeTo: this.route});
  }

  onEditProducts(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
}
