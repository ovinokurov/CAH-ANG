import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

// Import mock data from data folder
import { MOCK_TASKS, MOCK_NOTIFICATIONS, Task, Notification } from '../../data/mock-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  notifications: Notification[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Load data from mock data files
    this.tasks = MOCK_TASKS;
    this.notifications = MOCK_NOTIFICATIONS;
  }
  navigateToSection(section: string) {
    console.log(`Navigating to ${section} section`);
    
    if (section === 'ordering') {
      this.router.navigate(['/ordering']);
    } else if (section === 'patients') {
      // For patients section, show alert for now
      alert(`Navigation to ${section} section - This would be implemented in a real application`);
    } else if (section === 'preferences') {
      // For preferences section, show alert for now
      alert(`Navigation to ${section} section - This would be implemented in a real application`);
    } else {
      // For other sections, show alert for now
      alert(`Navigation to ${section} section - This would be implemented in a real application`);
    }
  }
}
