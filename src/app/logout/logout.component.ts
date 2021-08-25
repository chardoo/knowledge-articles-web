import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, public authService : AuthServiceService) { }

  ngOnInit(): void {
  }


  
  logout(): boolean {
    if(this.authService.logout()){
    this.router.navigate(['/'])
    }
    return false;
    }
}
