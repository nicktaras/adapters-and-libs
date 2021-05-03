import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldCardComponent } from './hello-world-card.component';

describe('HelloWorldCardComponent', () => {
  let component: HelloWorldCardComponent;
  let fixture: ComponentFixture<HelloWorldCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
