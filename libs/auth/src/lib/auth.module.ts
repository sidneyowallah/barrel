import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@barrel/material';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../../../src/aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

export const authRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AmplifyUIAngularModule,
    MaterialModule,
  ],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
