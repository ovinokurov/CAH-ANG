import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="main-container">
      <div class="content-area">
        <h2>Login</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <div class="login-container">
          <mat-card class="login-card">
            <mat-card-header>
              <mat-card-title>Login</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <form [formGroup]="loginForm" (ngSubmit)="onLogin()" class="login-form">
                <mat-form-field appearance="outline">
                  <mat-label>User Name</mat-label>
                  <input matInput formControlName="username" required>
                  <mat-error *ngIf="loginForm.get('username')?.hasError('required')">
                    Username is required
                  </mat-error>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Password</mat-label>
                  <input matInput type="password" formControlName="password" required>
                  <mat-error *ngIf="loginForm.get('password')?.hasError('required')">
                    Password is required
                  </mat-error>
                </mat-form-field>

                <button mat-raised-button color="primary" type="submit" [disabled]="loginForm.invalid">
                  Button Label
                </button>
              </form>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <div class="banner-area">
        <div class="banner-item">Banner</div>
        <div class="banner-item">Banner2</div>
        <div class="banner-item">Banner3</div>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Basic demo authentication - in real app, this would be an API call
      const { username, password } = this.loginForm.value;
      if (username && password) {
        this.router.navigate(['/home']);
      }
    }
  }
}
