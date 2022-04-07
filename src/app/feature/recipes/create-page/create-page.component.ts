import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit,AfterViewInit {
@ViewChild('createForm') createForm!:NgForm;
@ViewChild('recipeName') recipeName!:NgModel;
@ViewChild('ingredients') ingredients!:NgModel;
@ViewChild('preparation') preparation!:NgModel;

  constructor() { }

  ngOnInit(): void {
  }
ngAfterViewInit(): void {
  // console.log(this.createForm.value)
  console.log(this.recipeName)
}
onSubmit():void{
  if(this.recipeName.errors){
    // this.recipeName.invalid;
    console.log('recipeName')

  }
  if(this.ingredients.errors){
    // this.ingredients.invalid;

    console.log('ingredients')

  }
  if(this.preparation.errors){
    // this.preparation.invalid;
    // this.preparation.touched;

    console.log('preparation')

  }
}
}
