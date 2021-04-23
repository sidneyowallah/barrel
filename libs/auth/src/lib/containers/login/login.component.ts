import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState,
} from '@aws-amplify/ui-components';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'barrel-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  user: CognitoUserInterface | undefined;
  authState: AuthState;
  constructor(
    private router: Router,
    private ref: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      console.log('LoginPage', authState, authData);
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
      if (this.authState == AuthState.SignedIn) {
        this.router.navigate(['']);
      }
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
