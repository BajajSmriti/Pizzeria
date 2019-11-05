import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  count;
  show=false;

  constructor(private router:Router,private qs:HttpService){
    console.log(this.qs.count)
  }

  ngOnit(){
    
  }

  
}
