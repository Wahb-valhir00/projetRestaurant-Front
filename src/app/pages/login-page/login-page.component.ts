import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-interface-service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
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
  errorMsg: string[] = [];
  isLoginMode = true;

  constructor(private formBuilder: FormBuilder, private userServiceService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    if (this.userServiceService.getLoggedInUser()) {
      this.router.navigate(['/home']);
    }
  }

  login(): void {
    this.isSubmitted = true;
    this.errorMsg = [];
    if (this.loginForm.invalid) return;
    this.authRequest = this.loginForm.value;
    this.userServiceService.login(this.authRequest).subscribe(
      (response: any) => {
        this.router.navigate(['/hone']);
      },
      (error: any) => {
        console.error('Login error:', error);
        if (error.status === 401) {
          this.errorMsg.push('Invalid credentials. Please try again.');
        } else {
          this.errorMsg.push('An unexpected error occurred. Please try again later.');
        }
      }
    );
  }


  submit(): void {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    this.login();
  }
}