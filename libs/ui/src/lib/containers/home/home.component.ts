import { Component, AfterViewInit } from '@angular/core';
import {
  AgeVerificationModel,
  AgeVerificationComponent,
} from '../../age-verification/age-verification.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'barrel-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  result = '';
  constructor(public dialog: MatDialog) {}

  confirmDialog(): void {
    const dialogData = new AgeVerificationModel(
      `Age Verification`,
      `You must be 18 years old to enter`,
      `assets/images/age-ver-bg.jpg`
    );

    const dialogRef = this.dialog.open(AgeVerificationComponent, {
      maxWidth: '400px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      this.result = dialogResult;
    });
  }

  ngAfterViewInit() {
    if (!sessionStorage.getItem('ageConfirmed')) {
      this.confirmDialog();
    }
  }
}
