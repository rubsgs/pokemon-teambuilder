import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoTimeComponent } from './selecao-time.component';

describe('SelecaoTimeComponent', () => {
  let component: SelecaoTimeComponent;
  let fixture: ComponentFixture<SelecaoTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecaoTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
