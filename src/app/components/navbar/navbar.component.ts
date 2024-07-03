import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/services/admin-service.service';
import { Admin } from '../../services/models/admin';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  admin: Admin | null | undefined;
  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
    // Initialize the admin object here
    this.admin = this.adminService.getLoggedInAdmin();  }

  logout() {
    this.adminService.logout();
  }
}