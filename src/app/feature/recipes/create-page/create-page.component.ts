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
  console.log(this.createForm.value)

}
}
