import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCheckInComponent } from './client-check-in.component';

describe('ClientCheckInComponent', () => {
  let component: ClientCheckInComponent;
  let fixture: ComponentFixture<ClientCheckInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCheckInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
