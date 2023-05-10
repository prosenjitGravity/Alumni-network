import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { FormGroup,FormControl, } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  hide = true;
  public first_name:String='';
  public last_name:String='';
  public email:String='';
  public password:String='';
  ngOnInit() {}
  firstFormGroup = this._formBuilder.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    email:['', Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
    phone:['', Validators.required,Validators.minLength(10),Validators.maxLength(10)],
    gender:['',Validators.required],
    password:['',Validators.required,Validators.minLength(6)],
    // firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });
  isOptional = true;
  
  constructor(private _formBuilder: FormBuilder) {}
  formData(){
    console.log(this.firstFormGroup.value);
    
  }
}
