import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPhoneColorComponent } from './iphone-color.component';

describe('IPhoneColorComponent', () => {
  let component: IPhoneColorComponent;
  let fixture: ComponentFixture<IPhoneColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IPhoneColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPhoneColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
