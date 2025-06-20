import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <div class="pharmacy-info">
      Pharmacy: CAN | Columbus, OH
    </div>
    
    <mat-toolbar color="primary">
      <span>Logo</span>
      <span class="spacer"></span>
      <button mat-button (click)="navigateToHome()">Home</button>
      <button mat-button (click)="navigateToLogin()">Login</button>
      <button mat-button>Sam Ford</button>
      <button mat-icon-button>
        <mat-icon>logout</mat-icon>
      </button>
      <span>SF</span>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    
    mat-toolbar {
      border-bottom: 3px solid #3f51b5;
    }
  `]
})
export class AppComponent {
  title = 'Ordering/Tracking';

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
