import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private snackBar: MatSnackBar) { }

  // Show a success message
  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 4000, // Duration in milliseconds
      panelClass: ['success-toast'] // Optional CSS class for styling
    });
  }

  // Show an error message
  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 4000,
      panelClass: ['error-toast']
    });
  }
}
