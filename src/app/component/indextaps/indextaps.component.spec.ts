import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndextapsComponent } from './indextaps.component';

describe('IndextapsComponent', () => {
  let component: IndextapsComponent;
  let fixture: ComponentFixture<IndextapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndextapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndextapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
