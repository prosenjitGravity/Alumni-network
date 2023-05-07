import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppbarComponent } from './admin-appbar.component';

describe('AdminAppbarComponent', () => {
  let component: AdminAppbarComponent;
  let fixture: ComponentFixture<AdminAppbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAppbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
