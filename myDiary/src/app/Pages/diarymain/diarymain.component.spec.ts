import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarymainComponent } from './diarymain.component';

describe('DiarymainComponent', () => {
  let component: DiarymainComponent;
  let fixture: ComponentFixture<DiarymainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiarymainComponent]
    });
    fixture = TestBed.createComponent(DiarymainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
