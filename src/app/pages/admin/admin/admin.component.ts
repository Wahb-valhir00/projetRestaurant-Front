import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../../services/services/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  authRequest = {
    email: '',
    password: ''
  };
  errorMsg: string[] = []; // Initialize errorMsg as an empty array

  constructor(private adminService: AdminServiceService, private router: Router) {}

  login(): void {
    this.errorMsg = []; // Clear previous error messages
    this.adminService.login(this.authRequest).subscribe(
      (response) => {
        // Navigate to admin dashboard after successful login
        this.router.navigate(['/admin']);
      },
      (error) => {
        console.error('Login error:', error);
        if (error.status === 401) {
          this.errorMsg.push('Invalid credentials. Please try again.');
        } else {
          this.errorMsg.push('An unexpected error occurred. Please try again later.');
        }
      }
    );
  }

  register(): void {
    // Handle registration navigation logic
  }
}
