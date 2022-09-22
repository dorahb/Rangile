import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  IsLoggedIn(){
    return localStorage.getItem("username")!=null;
  }
}
