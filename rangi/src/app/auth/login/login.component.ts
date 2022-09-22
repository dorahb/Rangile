import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm = new FormGroup({
  //   email: FormControl(''),
  //   password: FormControl(''),
  // });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // get email(){
  //   return this.loginForm.get('email');
  // }


  proceedlogin(name:any){
    localStorage.setItem("username",name);
    this.router.navigate([""]);    
  }

}
