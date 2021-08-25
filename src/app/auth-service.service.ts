import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router:Router) { }


  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'password') {
         localStorage.setItem('username', user);
    return true;
    }
    
     return false;
     }
  
  logout(): any{
    localStorage.removeItem('username');
    return true
    
    } 
  
  getUser(): any {
       return localStorage.getItem('username');
       }
      
  isLoggedIn(): boolean {
       return this.getUser() !== null;
       }
       
}


