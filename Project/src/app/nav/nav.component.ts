import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from '../http.service'
import { Input, HostListener } from '@angular/core';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  show;
  // bt=false;

  constructor(private router:Router,private qs:HttpService) { }

  ngOnInit() {
    // setTimeout(()=>{    //<<<---    using ()=> syntax
    //   this.bt = true;
    // }, 10000);
  }

  // @Input() sideBar: ShoppingCartComponent;

  // @HostListener('click')
  // click() {
  //   this.sideBar.toggle();
  // }

  // @HostListener('click', ['$event.target']) onClick(btn) {
  //   this.sideBar.toggle()
  // }



  scart(){
    // this.show = !this.show;
    this.router.navigate(['shoppingCart'])
  }

}
