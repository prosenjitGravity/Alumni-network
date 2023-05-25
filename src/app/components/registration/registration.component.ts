// import { Component } from '@angular/core';
// import {FormBuilder, Validators} from '@angular/forms';
// import { FormGroup,FormControl, } from '@angular/forms';
// interface Animal {
//   start: string;
// }
// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent {
//   hide = true;
//   disableSelect=true;
//   public first_start:String='';
//   public last_start:String='';
//   public email:String='';
//   public password:String='';
  
//   // user role
//   role = [
//     {value: 'Alumni', viewValue: "I'm Alumni"},
//     {value: 'student', viewValue: "I'm Student"},
//   ];
// // select year
// animalControl = new FormControl<Animal | null>(null, Validators.required);
// selectFormControl = new FormControl('', Validators.required);
// animals= [
//   {start: 'Dog'},
//   {start: 'Cat' },
//   {start: 'Cow' },
//   {start: 'Fox'},
// ];
//   // firstForm:FormGroup;
//   // firstForm!: FormGroup;
//   // secondFormGroup:any= FormGroup;
//   constructor(private formBuilder: FormBuilder) {}
  
//     firstForm=this.formBuilder.group(
//       {
//         first_start:['',[Validators.required]],
//         last_start:['',[Validators.required]],
//         email:['',[Validators.required]],
//         phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
//         gender:['',[Validators.required]]
//       }
//       )
//   allData(){
//     console.log(this.firstForm.value);
    
//   }
// }

import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { FormGroup,FormControl, } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';


interface Animal {
  start: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  animalControl = new FormControl<Animal | null>(null, Validators.required);
selectFormControl = new FormControl('', Validators.required);

  courses=[
    {course_name : 'Artificial Intelligence and Machine Learning (AIML)'},
    {course_name : 'Applied Electronics & Instrumentation Engineering (AEIE)'},
    {course_name : 'Biomedical Engineering (BME)'},
    {course_name : ' Civil Engineering (CE)'},
    {course_name : 'Computer Science and Business Systems (CSBS)'},
    {course_name : 'Computer Science & Engineering (CSE)'},
    {course_name : 'Electrical Engineering (EE)'},
    {course_name : 'Electronics & Communication Engineering (ECE)'},
    {course_name : 'Information Technology (IT)'},
    {course_name : 'Mechanical Engineering (ME)'},
    {course_name : 'Bachelor of Business Administration (BBA)'},
    {course_name : 'Bachelor of Computer Application (BCA)'},
    {course_name : 'Master of Business Administration (MBA)'},
    {course_name : 'Master of Computer Application (MCA)'}
        ]
  hide = true;
  public first_name:any
  public last_name:any
  public start:any;
  public end:any;
  public email:any;
  public password:any;
  public gender:any;
  public phone:any;
  public user_role:any;
  public job_title:any;
  public company:any
  public address:any;
  public course:any;
  public token:any
  
  firstFormGroup = this._formBuilder.group({
    firstName:['', [Validators.required]],
    lastName:['', [Validators.required]],
    email:['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phone:['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    gender:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(6)]],
  });
  secondFormGroup = this._formBuilder.group({
    user_course:["",[Validators.required]],
    address:["",[Validators.required]],
    role: ["",[Validators.required]],
    start:["",[Validators.required]],
    end:["",[Validators.required]]
  });
  thirdFormGroup=this._formBuilder.group({
    job_title:[""],
    company_name:[""],
    confirm_email:["",[Validators.required]],
    confirm_password:["",[Validators.required]]
  })
  isOptional = true;
  
  constructor(private router:Router,private _formBuilder: FormBuilder, private service:RegisterService, private loginservice:LoginService) {}
  formData1(){
    console.log(this.firstFormGroup.value);
    this.first_name=this.firstFormGroup.value.firstName;
    this.last_name=this.firstFormGroup.value.lastName;
    this.email=this.firstFormGroup.value.email;
    this.phone=this.firstFormGroup.value.phone;
    this.password=this.firstFormGroup.value.password;
    this.gender=this.firstFormGroup.value.gender;
    console.log("first Form Group : ",this.first_name)
    console.log("last Form Group : ",this.last_name)
    console.log("email Form Group : ",this.email)
    console.log("password Form Group : ",this.password)
    console.log("gender Form Group : ",this.gender)
    
  }
  formData2(){
    console.log(this.secondFormGroup.value);
    this.user_role=this.secondFormGroup.value.role;
    this.course=this.secondFormGroup.value.user_course;
    this.start=this.secondFormGroup.value.start;
    this.end=this.secondFormGroup.value.end;
    this.address=this.secondFormGroup.value.address;
    console.log("first Form Group 2: ",this.user_role)
    console.log("department Form Group : ",this.course)
    console.log("course_start Form Group : ",this.start)
    console.log("course_end Form Group : ",this.end)
    console.log("address Form Group : ",this.address)
  }
  formData3(){
    console.log(this.thirdFormGroup.value);
    this.email=this.thirdFormGroup.value.confirm_email;
    this.password=this.thirdFormGroup.value.confirm_password;
    this.job_title=this.thirdFormGroup.value.job_title;
    this.service.registerUser(
                             { first_name:this.first_name,  phone:this.phone, 

                               last_name:this.last_name, email:this.email, 

                               password:this.password, gender:this.gender, 

                               role:this.user_role, department:this.course,  

                               address:this.address, company:this.company,

                               job_title:this.job_title, admission_year:this.start, 

                               course_end_year:this.end
                             })
    .subscribe((response)=>{
      console.log(response)
    })  
    // console.log('Show email',{emai:this.thirdFormGroup.value.confirm_email,password:this.thirdFormGroup.value.confirm_password})
    // this.loginservice.loginUser({emai:this.thirdFormGroup.value.confirm_email,password:this.thirdFormGroup.value.confirm_password})
    // .subscribe((response)=>{
    //   console.log(response.alumni)});
      
    //   console.log("_id : ", response.alumni._id);
    //     this.token = response.token;
    //     localStorage.setItem("user", JSON.stringify(response.alumni))
    //     localStorage.setItem("token", this.token);
    //     alert("login successfully")
    //     this.router.navigateByUrl('/all-post');
    // }))                       
  }
  ngOnInit():void {

  }
}