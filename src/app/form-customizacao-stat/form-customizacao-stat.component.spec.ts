import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomizacaoStatComponent } from './form-customizacao-stat.component';

describe('FormCustomizacaoStatComponent', () => {
  let component: FormCustomizacaoStatComponent;
  let fixture: ComponentFixture<FormCustomizacaoStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCustomizacaoStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCustomizacaoStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
