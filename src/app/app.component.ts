import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import {dobValidator, passValidator} from './validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';

  form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form  = this.fb.group({
      fname:'',
      lname:'',
      username: ['', [Validators.required,Validators.minLength(4)]],
      password: '',
      cnfpass: ['',passValidator],
      country: ["Afghanistan","Baden","Canada","Denmark","Egypt","France","Germany","Hungary","India","Japan","Korea","Liberia","Malaysia","Nepal","Oman","Pakistan","Russia","Singapore","Tonga","Uruguay","Württemberg","Yemen","Zambia"],
      dob:['',dobValidator]
    });

    this.form.controls.password.valueChanges
    .subscribe(
      x => this.form.controls.cnfpass.updateValueAndValidity()
    )
  

  }

onSubmit(){
  // console.log(this.form.controls.dob);
  this.form.markAsTouched();
}
}
