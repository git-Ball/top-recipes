import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  get passwordGroup():FormGroup{
    return this.registerFormGroup.controls['password'] as FormGroup;
  }
  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'passwords': new FormControl({
      'password': new FormControl('', [Validators.required, Validators.minLength(5)]),
      //TODO pass == repass
      'repass': new FormControl(),
    }),


  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  handleRegister():void{
    
  }
}
