import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private apiUrl = 'http://localhost:8080/api/admin';
  private loggedInAdmin: Admin | null;
  private router: Router; // Declare the router property

  constructor(private http: HttpClient, router: Router) { // Inject the Router service
    this.loggedInAdmin = this.getStoredAdmin(); // Initialize logged-in admin from local storage
    this.router = router; // Initialize the router property
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
     .pipe(
        tap((response: any) => {
          console.log('Raw response:', response); // Log the raw response
          if (response && response.id && response.name && response.email && response.password && response.telephone) {
            this.loggedInAdmin = response;
            localStorage.setItem('adminDetails', JSON.stringify(response)); // Store the entire response object
            this.saveToken(response.token); // Save token from response
          } else {
            console.error('Invalid response from server');
          }
        }),
        catchError(this.handleError)
      );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('adminDetails');
    this.loggedInAdmin = null;
    this.router.navigate(['/admin-login']); // Navigate to the login page after logout
  }

  registerAdmin(registerForm: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, registerForm)
      .pipe(
        tap((admin: Admin) => {
          this.loggedInAdmin = admin;
          localStorage.setItem('adminDetails', JSON.stringify(admin));
        }),
        catchError(this.handleError)
      );
  }

  getLoggedInAdmin(): Admin | null {
    return this.loggedInAdmin;
  }

  getStoredAdmin(): Admin | null {
    const adminDetails = localStorage.getItem('adminDetails');
    console.log('adminDetails:', adminDetails);
    try {
      return adminDetails ? JSON.parse(adminDetails) : null;
    } catch (e) {
      console.error('Error parsing admin details:', e);
      return null;
    }
  }

  private saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}