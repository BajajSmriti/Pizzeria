import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  count=0;
  total:number=0;

  constructor(private http: HttpClient) { }

  getPizza(){
    return this.http​
    .get('http://localhost:2000/pizza')
  
  }

  getIngredients(){
    return this.http​
    .get('http://localhost:2000/ingredients')
  
  }

  storeData(id:number,items: string, quantity: number, amount:number) {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json')
    const body={id:id,items:items,
      quantity:quantity,
      amount:amount}
  
    return this.http
    .post('http://localhost:2000/cart', body, 
    {headers: header })
  
  }
  deleteO(items: string, quantity: number, amount:number){
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json')
  
    const body={items:items,
      quantity:quantity,
      amount:amount}
  
    return this.http
    .post('http://localhost:2000/deleteo', body, 
    {headers: header })
  }

  getCart(){
    return this.http​
    .get('http://localhost:2000/cart')
  
  }

  updateQ(id:number,items: string, quantity: number, amount:number){
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json')
   console.log(quantity)
    const body={id:id,items:items,
      quantity:quantity,
      amount:amount}
  
    return this.http
    .post('http://localhost:2000/updateq', body, 
    {headers: header })
  }

  drop(){
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json') 
    const body={} 
    return this.http
    .post('http://localhost:2000/updateq', body, 
    {headers: header })
  }



}
