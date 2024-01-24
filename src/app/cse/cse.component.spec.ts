import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSEComponent } from './cse.component';

describe('CSEComponent', () => {
  let component: CSEComponent;
  let fixture: ComponentFixture<CSEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CSEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
