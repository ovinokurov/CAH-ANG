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
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
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
