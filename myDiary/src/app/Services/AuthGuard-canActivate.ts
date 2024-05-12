import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        const diaryuserdata = localStorage.getItem('DiaryUser');
        if (diaryuserdata) {
            const userData = JSON.parse(diaryuserdata);
            // Check if the data has expired
            if (userData.expiry && Date.now() > userData.expiry) {
              localStorage.removeItem('DiaryUser');
              this.router.navigate(['/login']);
              return false;
            } else {
              // Data is still valid, use it
              console.log('User data:', userData.data);
              return true;
            }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}