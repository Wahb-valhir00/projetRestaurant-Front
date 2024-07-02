import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service'; // Adjust path as needed
import { Router } from '@angular/router';
import { Admin } from '../../../../services/models/admin';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  admin: Admin | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Fetch admin details on component initialization
    this.admin = this.authService.getStoredAdmin();
    if (!this.admin) {
      console.error('Admin details not found. Redirecting to login.');
      this.router.navigate(['/admin-login']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/admin-login']); // Navigate to admin login page after logout
  }
}
