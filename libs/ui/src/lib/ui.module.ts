import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@barrel/material';
import { RouterModule } from '@angular/router';
import { AgeVerificationComponent } from './age-verification/age-verification.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
  ],
  declarations: [
    AgeVerificationComponent,
    ConfirmDialogComponent,
    HomeComponent,
  ],
  exports: [AgeVerificationComponent, ConfirmDialogComponent],
})
export class UiModule {}
