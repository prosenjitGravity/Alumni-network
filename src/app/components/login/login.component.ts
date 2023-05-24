import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public hide:Boolean=true;
   public login:String='assets/images/login.jpg'
   public login_info:any;
   public loginForm:any;
  
   constructor(private formBuilder:FormBuilder,httpClient:HttpClient,private service:LoginService){}
 ngOnInit(): void {
   this.loginForm=this.formBuilder.group(
    {
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]]
    }
   )
 }
   
   saveLogin(): any{
    console.log(this.loginForm.value);
    this.login_info=this.loginForm.value
    // let email=this.loginForm.value.email;
    // let password=this.loginForm.value.password;
    // console.log('info : ',{email,password})
    this.service.loginUser({email:this.loginForm.value.email,password:this.loginForm.value.password})
     .subscribe((response:any)=>{
      console.log(response)
      console.log("token : "+response.token)
    })
    
   }
       
   
}
