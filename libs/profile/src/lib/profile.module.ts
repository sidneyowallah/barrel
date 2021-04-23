import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@barrel/material';
import { ProfileComponent } from './containers/profile/profile.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AmplifyUIAngularModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProfileComponent },
    ]),
  ],
  declarations: [ProfileComponent, ProfileFormComponent],
  exports: [ProfileFormComponent],
})
export class ProfileModule {}
