import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {CodeInputModule} from "angular-code-input";
import { AdminComponent } from './pages/admin/admin/admin.component';
import { AdminDashboardComponent } from './pages/admin/admin/admin-dashboard/admin-dashboard.component';
import { AnimatedBgComponent } from './components/animated-bg/animated-bg.component';
import { RestaurantListComponent } from './pages/restaurant/restaurant-list/restaurant-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditRestaurantModalComponent } from './pages/restaurant/edit-restaurant-modal/edit-restaurant-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { EditUserModalComponent } from './pages/user/edit-user-modal/edit-user-modal.component';
import { ReportListComponent } from './pages/reports/report-list/report-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminDashboardComponent,
    AnimatedBgComponent,
    RestaurantListComponent,
    NavbarComponent,
    EditRestaurantModalComponent,
    UserListComponent,
    EditUserModalComponent,
    ReportListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CodeInputModule,
    NgbModule
    
  ],
  providers: [
    HttpClient,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
