import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdetailcomponentComponent } from './postdetailcomponent.component';

describe('PostdetailcomponentComponent', () => {
  let component: PostdetailcomponentComponent;
  let fixture: ComponentFixture<PostdetailcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostdetailcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdetailcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
