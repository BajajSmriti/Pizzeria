import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cus;
  helloText;
  show=false;//this.show=true;
  iarr=[];
  d2;
  change=false;
  
  constructor(private activatedRoute: ActivatedRoute, private router:Router, private qs: HttpService) { }

  ngOnInit() {
    this.qs.getPizza().subscribe((res: Response) => { this.cus = res });
  }

  @Input()
  par_obj={};

  add(id,items, quantity, amount ){ 
    this.show=true;
    if(this.check(id)){
      alert(items+" has been successfully added to the cart.")
      quantity+=1;
        this.qs.updateQ(id,items, quantity, amount ).subscribe(
          (res: Response) => { this.d2 = res });
          this.qs.total=this.qs.total+amount;
          this.change=true;
    }   
    else{
      alert(items+" has been successfully added to the cart.")
    console.log(this.qs.count);
    this.qs.count+=1;
    console.log(this.qs.count);
      this.qs.storeData(id,items, quantity, amount ).subscribe(
        (res: Response) => { this.helloText = res });
    this.qs.total=this.qs.total+amount;
    this.iarr.push(id);
    this.change=true;
    }
  }

  check(id){
    if(this.iarr.length==0){
      return false;
    }
    else{
    for(var i=0;i<=this.iarr.length;i++){
      if(this.iarr[i]==id){
        return true;
      }
      else
      continue;
    }
    return false;
  }
  }

  route(itemid){
    this.router.navigate(['build'],{queryParams:{id:itemid}})
  }

  updateCount(count){
    this.par_obj=count
  }
  }

