import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDistributionComponent } from './stat-distribution.component';

describe('StatDistributionComponent', () => {
  let component: StatDistributionComponent;
  let fixture: ComponentFixture<StatDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
