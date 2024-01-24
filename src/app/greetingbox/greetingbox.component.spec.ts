import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingboxComponent } from './greetingbox.component';

describe('GreetingboxComponent', () => {
  let component: GreetingboxComponent;
  let fixture: ComponentFixture<GreetingboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreetingboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreetingboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
