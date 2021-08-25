import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-c-login',
  templateUrl: './c-login.component.html',
  styleUrls: ['./c-login.component.css']
})
export class CLoginComponent implements OnInit {

  message : string;
  constructor(private router: Router,public authService : AuthServiceService) { 
    this.message = "";
  }
  login(username: string, password: string): boolean {
    this.message = "";
    if (!this.authService.login(username, password)) {
            this.message = 'Incorrect credentials.';
       setTimeout(function() {
           this.message ="";
       }.bind(this), 2500);
    }
    else{
      this.router.navigate(['/articles'])
    }
        return false;
    }
  
    logout(): boolean {
    this.authService.logout();
    this.router.navigate['/']

    return false;
    }




  ngOnInit(): void {
  }

}
