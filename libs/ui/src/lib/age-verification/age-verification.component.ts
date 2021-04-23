import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'barrel-age-verification',
  templateUrl: './age-verification.component.html',
  styleUrls: ['./age-verification.component.scss'],
})
export class AgeVerificationComponent {
  title: string;
  message: string;
  imagePath: string;

  constructor(
    public dialogRef: MatDialogRef<AgeVerificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AgeVerificationModel
  ) {
    dialogRef.disableClose = true;
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
    this.imagePath = data.imagePath;
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
    sessionStorage.setItem('ageConfirmed', 'true');
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class AgeVerificationModel {
  constructor(
    public title: string,
    public message: string,
    public imagePath: string
  ) {}
}
