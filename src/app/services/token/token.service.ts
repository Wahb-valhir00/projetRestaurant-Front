import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  set token(token: string) {
    localStorage.setItem('token',token);
  }

  get token() {
    return localStorage.getItem('token') as string;
  }

  set role(role: string) {  // Add this method
    localStorage.setItem('role', role);
  }

  get role() {  // Add this method
    return localStorage.getItem('role') as string;
  }

  constructor() { }
}