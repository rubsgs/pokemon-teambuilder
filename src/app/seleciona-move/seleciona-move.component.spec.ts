import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaMoveComponent } from './seleciona-move.component';

describe('SelecionaMoveComponent', () => {
  let component: SelecionaMoveComponent;
  let fixture: ComponentFixture<SelecionaMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionaMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionaMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
