import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        ReactiveFormsModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize login form with empty values', () => {
    expect(component.loginForm.get('username')?.value).toBe('');
    expect(component.loginForm.get('password')?.value).toBe('');
  });

  it('should require username and password', () => {
    expect(component.loginForm.valid).toBeFalsy();
    
    component.loginForm.patchValue({
      username: 'testuser',
      password: 'testpass'
    });
    
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should navigate to home on successful login', () => {
    component.loginForm.patchValue({
      username: 'testuser',
      password: 'testpass'
    });
    
    component.onLogin();
    
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should not navigate if form is invalid', () => {
    component.onLogin();
    
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });
});
