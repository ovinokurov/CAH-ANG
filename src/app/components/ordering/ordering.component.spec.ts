import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OrderingComponent } from './ordering.component';

describe('OrderingComponent', () => {
  let component: OrderingComponent;
  let fixture: ComponentFixture<OrderingComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        OrderingComponent,
        NoopAnimationsModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderingComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with list view', () => {
    expect(component.currentView).toBe('list');
  });

  it('should show new order form when showNewOrderForm is called', () => {
    component.showNewOrderForm();
    expect(component.currentView).toBe('new-edit');
    expect(component.showComponents).toBe(false);
  });

  it('should return to list view when backToList is called', () => {
    component.currentView = 'new-edit';
    component.backToList();
    expect(component.currentView).toBe('list');
  });

  it('should show components when procedure is changed', () => {
    component.onProcedureChange();
    expect(component.showComponents).toBe(true);
  });

  it('should toggle component expansion', () => {
    const component1 = component.components[0];
    const initialState = component1.expanded;
    
    component.toggleComponent(component1);
    expect(component1.expanded).toBe(!initialState);
  });

  it('should have mock data loaded', () => {
    expect(component.patients.length).toBeGreaterThan(0);
    expect(component.physicians.length).toBeGreaterThan(0);
    expect(component.procedures.length).toBeGreaterThan(0);
    expect(component.components.length).toBeGreaterThan(0);
    expect(component.orderRecords.length).toBeGreaterThan(0);
  });

  it('should return correct status classes', () => {
    expect(component.getStatusClass('completed')).toBe('status-completed');
    expect(component.getStatusClass('in progress')).toBe('status-in-progress');
    expect(component.getStatusClass('not yet started')).toBe('status-not-started');
    expect(component.getStatusClass('resume ordering')).toBe('status-resume');
  });
});
