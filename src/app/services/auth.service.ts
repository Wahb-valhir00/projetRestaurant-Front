import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Admin } from './models/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((response: any) => {
          this.saveToken(response.token);
          this.saveAdmin(response.admin);
        }),
        catchError(this.handleError)
      );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('adminDetails');
  }

  private saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  private saveAdmin(admin: Admin): void {
    localStorage.setItem('adminDetails', JSON.stringify(admin));
  }

  getStoredAdmin(): Admin | null {
    const adminDetails = localStorage.getItem('adminDetails');
    return adminDetails ? JSON.parse(adminDetails) : null;
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
