import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {

  cus;
  cost1:number=0;
  show=false;
  helloText;
  paramSub;
  pid;
  arr=[];

  constructor(private aR:ActivatedRoute,private qs: HttpService) { }

  ngOnInit() {
    //this.paramSub=this.aR.queryParams.subscribe(params=> {this.pid=params['id']})
    this.qs.getIngredients().subscribe((res: Response) => { this.cus = res });
  }

  @Input()
  par_obj={};

  updateCount(count){
    this.par_obj=count
  }

  func(id,items,quantity,amount){
    //this.arr.push(items)
    this.cost1=parseInt(this.cost1+amount)  
    this.qs.storeData(id, items, quantity, amount ).subscribe(
      (res: Response) => { this.helloText = res 
      console.log(this.helloText)});
      this.qs.total=this.qs.total+quantity*amount;
  }

}