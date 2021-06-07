import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhoodsComponent } from './addhoods.component';

describe('AddhoodsComponent', () => {
  let component: AddhoodsComponent;
  let fixture: ComponentFixture<AddhoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
