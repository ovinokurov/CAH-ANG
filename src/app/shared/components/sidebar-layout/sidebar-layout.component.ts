import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent, NavItem } from '../sidebar-nav/sidebar-nav.component';

@Component({
  selector: 'app-sidebar-layout',
  standalone: true,
  imports: [CommonModule, SidebarNavComponent],
  template: `
    <div class="main-container">
      <app-sidebar-nav 
        [navItems]="navItems"
        (navClick)="onNavClick($event)"
      ></app-sidebar-nav>
      
      <div class="content-area">
        <ng-content></ng-content>
      </div>

      <div class="banner-area">
        <div class="banner-item">Banner</div>
        <div class="banner-item">Banner2</div>
        <div class="banner-item">Banner3</div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        Footer Content
      </div>
    </footer>
  `,
  styleUrl: './sidebar-layout.component.scss'
})
export class SidebarLayoutComponent {
  @Input() navItems: NavItem[] = [];

  onNavClick(item: NavItem) {
    // Handle navigation clicks if needed
    console.log('Navigation clicked:', item);
  }
}
