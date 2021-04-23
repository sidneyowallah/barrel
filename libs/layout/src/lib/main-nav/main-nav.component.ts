import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState,
} from '@aws-amplify/ui-components';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'barrel-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit, OnDestroy {
  signedIn = false;
  currentUser: CognitoUserInterface | undefined;
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
      this.currentUser = authData as CognitoUserInterface;
      console.log('Current user', this.currentUser);
      this.ref.detectChanges();
      if (this.authState == AuthState.SignedIn) {
        this.signedIn = true;
        this.router.navigate(['']);
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const element = document.querySelector('.menu');
    const logo = document.querySelector('.logo');
    const icon = document.querySelector('.menu-icons');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('menu-inverse');
      logo.classList.add('logo-inverse');
      icon.classList.add('icon-inverse');
    } else {
      element.classList.remove('menu-inverse');
      logo.classList.remove('logo-inverse');
      icon.classList.remove('icon-inverse');
    }
  }

  async logout() {
    await Auth.signOut().then((res) => {
      this.signedIn = false;
    });
    this.toastr.success('You have been logged out', 'Toastr fun!');
  }

  goToHome() {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
