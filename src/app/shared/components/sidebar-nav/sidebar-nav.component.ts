import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface NavItem {
  label: string;
  route?: string;
  action?: () => void;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar">
      <nav class="nav-menu">
        <a 
          *ngFor="let item of navItems" 
          href="#" 
          class="nav-item" 
          [class.active]="item.active"
          (click)="onNavClick($event, item)"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  `,
  styleUrl: './sidebar-nav.component.scss'
})
export class SidebarNavComponent {
  @Input() navItems: NavItem[] = [];
  @Output() navClick = new EventEmitter<NavItem>();

  constructor(private router: Router) {}

  onNavClick(event: Event, item: NavItem) {
    event.preventDefault();
    
    if (item.route) {
      this.router.navigate([item.route]);
    }
    
    if (item.action) {
      item.action();
    }
    
    this.navClick.emit(item);
  }
}
