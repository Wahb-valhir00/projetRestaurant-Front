import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { AdminDashboardComponent } from './pages/admin/admin/admin-dashboard/admin-dashboard.component';
import { RestaurantListComponent } from './pages/restaurant/restaurant-list/restaurant-list.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { ReportListComponent } from './pages/reports/report-list/report-list.component';

const routes: Routes = [
  { path: 'admin-login', component: AdminComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'restaurants', component: RestaurantListComponent},
  { path: 'users' , component:UserListComponent},
  { path: 'reports',component:ReportListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
