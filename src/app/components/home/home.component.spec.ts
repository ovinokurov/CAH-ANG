import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        NoopAnimationsModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load mock data on init', () => {
    expect(component.tasks.length).toBeGreaterThan(0);
    expect(component.notifications.length).toBeGreaterThan(0);
  });

  it('should have navigation cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.navigation-card');
    expect(cards.length).toBe(3);
  });

  it('should display tasks in dashboard', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const taskSection = compiled.querySelector('.task-dashboard');
    expect(taskSection?.textContent).toContain('My Tasks');
  });

  it('should handle navigation to sections', () => {
    spyOn(window, 'alert');
    component.navigateToSection('patient-enrollment');
    expect(window.alert).toHaveBeenCalled();
  });

  it('should display mock tasks data', () => {
    expect(component.tasks[0].type).toBe('Order Review');
    expect(component.tasks[0].priority).toBe('high');
  });

  it('should display mock notifications data', () => {
    expect(component.notifications[0].type).toBe('info');
    expect(component.notifications[1].type).toBe('alert');
  });
});
