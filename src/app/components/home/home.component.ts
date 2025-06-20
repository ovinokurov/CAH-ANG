import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

interface Task {
  id: number;
  type: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}

interface Notification {
  id: number;
  message: string;
  type: 'alert' | 'info' | 'warning';
  timestamp: Date;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="main-container">
      <div class="content-area">
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <div class="task-dashboard">
          <h3>My Tasks</h3>
          <p>Alerts/Notifications</p>
          <p>ETAs</p>
          <p>Errors</p>
          
          <div *ngIf="tasks.length > 0" style="margin-top: 20px;">
            <h4>Current Tasks:</h4>
            <ul>
              <li *ngFor="let task of tasks">
                {{ task.type }}: {{ task.description }} 
                <span [class]="'priority-' + task.priority">({{ task.priority }})</span>
              </li>
            </ul>
          </div>

          <div *ngIf="notifications.length > 0" style="margin-top: 20px;">
            <h4>Recent Notifications:</h4>
            <ul>
              <li *ngFor="let notification of notifications">
                <span [class]="'notification-' + notification.type">{{ notification.message }}</span>
                <small>({{ notification.timestamp | date:'short' }})</small>
              </li>
            </ul>
          </div>
        </div>

        <div class="navigation-cards">
          <mat-card class="navigation-card" (click)="navigateToSection('patient-enrollment')">
            <mat-card-content>
              <h3>Patient Enrollment & Verification</h3>
            </mat-card-content>
          </mat-card>

          <mat-card class="navigation-card" (click)="navigateToSection('ordering')">
            <mat-card-content>
              <h3>Ordering</h3>
            </mat-card-content>
          </mat-card>

          <mat-card class="navigation-card" (click)="navigateToSection('other')">
            <mat-card-content>
              <h3>Other</h3>
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

    <footer style="background-color: #666; color: white; text-align: center; padding: 20px; margin-top: 40px;">
      Footer Content
    </footer>
  `,
  styles: [`
    .priority-high { color: red; font-weight: bold; }
    .priority-medium { color: orange; }
    .priority-low { color: green; }
    
    .notification-alert { color: red; }
    .notification-warning { color: orange; }
    .notification-info { color: blue; }
    
    ul { text-align: left; max-width: 600px; margin: 0 auto; }
    li { margin-bottom: 8px; }
  `]
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  notifications: Notification[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadMockData();
  }

  loadMockData() {
    // Mock tasks data
    this.tasks = [
      {
        id: 1,
        type: 'Order Review',
        description: 'Review prescription for John Doe',
        priority: 'high'
      },
      {
        id: 2,
        type: 'Patient Verification',
        description: 'Verify insurance for Jane Smith',
        priority: 'medium'
      },
      {
        id: 3,
        type: 'Inventory Check',
        description: 'Check stock levels for Medication X',
        priority: 'low'
      }
    ];

    // Mock notifications data
    this.notifications = [
      {
        id: 1,
        message: 'New order received for processing',
        type: 'info',
        timestamp: new Date(Date.now() - 15 * 60 * 1000) // 15 minutes ago
      },
      {
        id: 2,
        message: 'Patient insurance verification failed',
        type: 'alert',
        timestamp: new Date(Date.now() - 30 * 60 * 1000) // 30 minutes ago
      },
      {
        id: 3,
        message: 'Delivery ETA updated for Order #12345',
        type: 'warning',
        timestamp: new Date(Date.now() - 45 * 60 * 1000) // 45 minutes ago
      }
    ];
  }

  navigateToSection(section: string) {
    // In a real app, these would navigate to actual pages
    console.log(`Navigating to ${section} section`);
    // For demo purposes, we'll just log the action
    alert(`Navigation to ${section} section - This would be implemented in a real application`);
  }
}
