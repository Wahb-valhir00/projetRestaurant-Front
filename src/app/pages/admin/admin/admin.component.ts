import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../../services/services/admin-service.service';
import { Admin } from '../../../services/models/admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  authRequest = {
    email: '',
    password: ''
  };
  registerForm = {
    name: '',
    email: '',
    password: '',
    telephone: ''
  };
  errorMsg: string[] = []; // Initialize errorMsg as an empty array
  isLoginMode = true; // Flag to track whether in login or registration mode

  constructor(private adminService: AdminServiceService, private router: Router) {}

  ngOnInit(): void {
    // Check if already logged in and navigate to dashboard
    if (this.adminService.getLoggedInAdmin()) {
      this.router.navigate(['/admin-dashboard']);
    }
  }

  login(): void {
    this.errorMsg = []; // Clear previous error messages
    this.adminService.login(this.authRequest).subscribe(
      (response: any) => { // Adjust to specify the type of response
        // Navigate to admin dashboard after successful login
        this.router.navigate(['/admin']);
      },
      (error: any) => { // Adjust to specify the type of error
        console.error('Login error:', error);
        if (error.status === 401) {
          this.errorMsg.push('Invalid credentials. Please try again.');
        } else {
          this.errorMsg.push('An unexpected error occurred. Please try again later.');
        }
      }
    );
  }

  register() {
    this.errorMsg = []; // Clear previous error messages
    this.adminService.registerAdmin(this.registerForm).subscribe(
      (response: any) => {
        console.log('Registration successful:', response);
        // Optionally, navigate to the login page or show a success message
        this.toggleMode(); // Switch to login mode after successful registration
      },
      (error: any) => {
        console.error('Registration failed:', error);
        if (error.status === 409) {
          // Handle conflict error (e.g., email already registered)
          this.errorMsg.push('Email address already exists. Please use a different email.');
        } else {
          // Handle other errors as needed
          this.errorMsg.push('Registration failed. Please try again later.');
        }
      }
    );
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode; // Toggle between login and registration modes
    this.errorMsg = []; // Clear any previous error messages
  }
}
