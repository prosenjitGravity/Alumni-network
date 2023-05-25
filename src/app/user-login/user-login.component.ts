import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  public user_info: any;
  public hide: Boolean = true;
  public login: String = 'assets/images/login.jpg'
  public login_info: any;
  public loginForm: any;
  public token: any;

  constructor(private formBuilder: FormBuilder, httpClient: HttpClient, private service: LoginService, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    )
  }

  saveLogin(): any {
    console.log(this.loginForm.value);
    this.login_info = this.loginForm.value
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    console.log('info : ', { email, password })
    this.service.loginUser({ email: this.loginForm.value.email, password: this.loginForm.value.password })
      .subscribe((response: any) => {
        console.log(response)
        console.log("token : " + response.token)
        console.log(response.alumni);
        console.log("_id : ", response.alumni._id);
        this.token = response.token;
        this.user_info = response.alumni
        localStorage.setItem("user", JSON.stringify(response.alumni))
        localStorage.setItem("token", this.token);
        alert("login successfully")
        this.router.navigateByUrl('/all-post');
      })

  }


}
