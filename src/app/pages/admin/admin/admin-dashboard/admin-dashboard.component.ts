import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../../services/services/report.service';
import { RestaurantService } from '../../../../services/services/restaurant.service';
import { UserService } from '../../../../services/services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  userCount: number = 0;
  restaurantCount: number = 0;
  reportCount: number = 0;

  constructor(
    private userService: UserService,
    private restaurantService: RestaurantService,
    private reportService: ReportService
  ) {}

  ngOnInit(): void {
    this.loadCounts();
  }

  loadCounts(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.userCount = users.length;
    });

    this.restaurantService.getAllRestaurants().subscribe(restaurants => {
      this.restaurantCount = restaurants.length;
    });

    this.reportService.getAllReports().subscribe(reports => {
      this.reportCount = reports.length;
    });
  }
}
