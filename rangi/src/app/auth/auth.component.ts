import { Component, OnInit } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public email!:string;
  public password!: string;
  public user!: UserCredential;
  public errorMessage!: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(){
    this.authenticationService.emailLogin(this.email, this.password).subscribe({
      next:(user)=> this.user =user,
      error: (error)=> this.errorMessage = error,
    });
  }

  createAccount(){
    this.authenticationService.createUserWithEmail(this.email,this.password).subscribe({
      next:(user)=> this.user = user,
      error:(error)=>this.errorMessage = error,
    })
  }

}
