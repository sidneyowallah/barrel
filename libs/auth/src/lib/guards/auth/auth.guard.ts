import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    return Auth.currentAuthenticatedUser()
      .then((_user) => {
        return true;
      })
      .catch((_err) => {
        this.router.navigate(['/auth']);
        return false;
      });
  }
}
