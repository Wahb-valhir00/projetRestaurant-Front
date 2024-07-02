import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private apiUrl = 'http://localhost:8080/api/admin';
  private loggedInAdmin: any;

  constructor(private http: HttpClient) {}

  login(authRequest: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, authRequest)
      .pipe(
        tap((admin: any) => {
          this.loggedInAdmin = admin;
          localStorage.setItem('adminDetails', JSON.stringify(admin));
        }),
        catchError(this.handleError)
      );
  }

  registerAdmin(registerForm: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, registerForm)
      .pipe(
        tap((admin: any) => {
          this.loggedInAdmin = admin;
          localStorage.setItem('adminDetails', JSON.stringify(admin));
        }),
        catchError(this.handleError)
      );
  }

  getLoggedInAdmin(): any {
    return this.loggedInAdmin;
  }

  private handleError(error: any): Observable<any> {
    console.error('API Error:', error);
    return throwError(error);
  }
}
