import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaPosicaoTimeComponent } from './seleciona-posicao-time.component';

describe('SelecionaPosicaoTimeComponent', () => {
  let component: SelecionaPosicaoTimeComponent;
  let fixture: ComponentFixture<SelecionaPosicaoTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionaPosicaoTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionaPosicaoTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
