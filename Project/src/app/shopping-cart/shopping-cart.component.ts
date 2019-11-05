import { Component, OnInit, HostBinding, Input,Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cus;
  total;
  d1;
  d2;
  d3;
  paramSub;
  show;
  
  @Output() eventChange: EventEmitter<object> = new EventEmitter<object>()

  constructor( private router:Router, private qs: HttpService) {
    this.total = this.qs.total
  }

  ngOnInit() {
    this.qs.getCart().subscribe((res: Response) => { this.cus = res });
    this.eventChange.emit(this.cus)
  }

  ngDoCheck(){
    this.ngOnInit()
    this.total=this.qs.total;
  }

  switch(){
    this.router.navigate(['personal'])
  }

  minus(id, items, quantity, amount) {
    quantity -= 1;
    this.ngOnInit();
    if (quantity == 0) {
      this.remove(items, quantity, amount)
    }
    else {
      this.ngOnInit();
      this.qs.updateQ(id, items, quantity, amount).subscribe(
        (res: Response) => { this.d2 = res });
      this.total = this.total - amount
      this.qs.total = this.total;
    }

  }

  plus(id, items, quantity, amount) {
    alert("its plus")
    quantity += 1;
    this.qs.updateQ(id, items, quantity, amount).subscribe(
      (res: Response) => { this.d2 = res });
    this.ngOnInit();
    //this.qs.getCart().subscribe((res: Response) => { this.cus = res });
    this.total = this.total + amount;
    this.qs.total = this.total;
  }

  remove(items, quantity, amount) {
    var x = confirm("Are you sure about not trying it?");
    if (x == true) {
      this.qs.deleteO(items, quantity, amount).subscribe(
        (res: Response) => { this.d3 = res });
      this.ngOnInit();
      //this.qs.getCart().subscribe((res: Response) => { this.cus = res });
      if (this.total - quantity * amount >= 0) {
        this.total = this.total - quantity * amount;
        this.qs.total = this.total;
      }
    }
  }


}
