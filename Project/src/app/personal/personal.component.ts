import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  form1: FormGroup;
  submittedModel;
  submitted=false;
  show=false;
  d2;

  constructor(private formBuilder:FormBuilder, private qs:HttpService) { }

  ngOnInit() {
    this.form1=this.formBuilder.group({
      title: ['Smriti Bajaj',Validators.required],
      desc: ['A-1001, Omega Paradise',Validators.required],
      no: ['8923479237',Validators.required]
    })
  }

  change(){
    this.show=true;
    this.qs.drop().subscribe(
      (res: Response) => { this.d2 = res });
    this.qs.total=0;
  }
  onSubmit(value){
    this.submitted=true;
    this.submittedModel=value;
  }

}
