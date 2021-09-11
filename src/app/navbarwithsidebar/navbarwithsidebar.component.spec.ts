import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarwithsidebarComponent } from './navbarwithsidebar.component';

describe('NavbarwithsidebarComponent', () => {
  let component: NavbarwithsidebarComponent;
  let fixture: ComponentFixture<NavbarwithsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarwithsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarwithsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
