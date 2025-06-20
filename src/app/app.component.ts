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
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ordering/Tracking';

  constructor(private router: Router) {}
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToOrdering() {
    this.router.navigate(['/ordering']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
