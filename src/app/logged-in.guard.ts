import { Injectable } from '@angular/core';
 import {
 CanActivate,
 ActivatedRouteSnapshot,
 RouterStateSnapshot
 } from '@angular/router';
 import { Observable } from 'rxjs';
 import { AuthServiceService } from './auth-service.service';
 import { Router, ActivatedRoute } from '@angular/router';
   
    @Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private authService: AuthServiceService, private router: Router) {}
   
    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    console.log('canActivate', isLoggedIn);
    if(!isLoggedIn){
        this.router.navigate(['/login']);
    }
    return isLoggedIn;
    }
}